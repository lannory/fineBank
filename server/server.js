import express from 'express';
import cors from 'cors';
import axios from 'axios';
import fs from 'fs';
import multer from 'multer';


const app = express();
const PORT = 3001;
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '/fineBank/app/public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
})
const upload = multer({storage});



const TRANSACTIONS_FILE = './transactions.json';
const ITEMS_FILE = './items.json';


app.use(cors());
app.use(express.json());

async function fetchAndCacheTransactions() {
	const now = new Date();

	const oneMonthAgo = new Date(now);
	oneMonthAgo.setMonth(now.getMonth() - 1);

	const nowInSeconds = Math.floor(now.getTime() / 1000);
	const oneMonthAgoInSeconds = Math.floor(oneMonthAgo.getTime() / 1000);

	try {
		
		const data = await response.json();

		let existingData;

		if (fs.existsSync(TRANSACTIONS_FILE)) {
			const raw = fs.readFileSync(TRANSACTIONS_FILE, 'utf-8');
			existingData = JSON.parse(raw);
		}

		const existingIds = new Set(existingData.map(item => {
			return item.id
		}))

		// console.log(data)
		const clearedData = data.map(({amount, description, time, id}) => ({amount: amount / 100, description, time: time * 1000, id: id}))
		console.log(existingData)
		if(existingData){
			clearedData.forEach(item => {
				if(!existingIds.has(item.id)){
					existingData.unshift(item);
				}
			})
		}else{
			existingData = [...clearedData];
		}

		existingData = existingData.sort((a, b) => b.time - a.time);

		fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(existingData, null, 2), 'utf-8');
		console.log('data saved');
	} catch (err) {
		console.error(err.message);
	}

}

app.get('/items', async (req, res) =>{
	try {
		const raw = fs.readFileSync(ITEMS_FILE, 'utf-8');
		const json = JSON.parse(raw);
		res.json(json);
  } catch (err) {
		res.status(500);
  }
})

app.get('/transactions', async (req, res) => {
  	try {
		const raw = fs.readFileSync(TRANSACTIONS_FILE, 'utf-8');
		const json = JSON.parse(raw);
		res.json(json);
  } catch (err) {
		res.status(500);
  }
});

app.post('/items', async (req, res) =>{
	const obj = req.body;

	try {
		const raw = fs.readFileSync(ITEMS_FILE, 'utf-8');
		const arr = JSON.parse(raw);
		
		if(arr){
			arr.push(obj);
		}
		

		fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(arr, null, 2), 'utf-8');


  } catch (err) {
		res.status(500);
  }
})

app.get('/refreshtransactions', async (req, res) => {
  await fetchAndCacheData();
  res.json({ message: 'done' });
});

let alreadyFetched = false;

if (!alreadyFetched) {
	await fetchAndCacheTransactions();
	alreadyFetched = true;
}

app.listen(PORT, () => {
	console.log('server started, port' + PORT);
});

app.post('/api/upload', upload.single('img'), (req, res) => {
	res.json(req.file.originalname);
});

