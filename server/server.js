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
		const response = await fetch(`https://api.monobank.ua/personal/statement/0/${oneMonthAgoInSeconds}/${nowInSeconds}`, {
			headers: {"X-token": API_KEY} 
		})
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
		const clearedData = data.map(({amount, description, time, id}) => ({amount: amount / 100, description, time: time * 1000, id: id, type: 'mono'}))
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
	console.log(obj)
	try {
		const raw = fs.readFileSync(ITEMS_FILE, 'utf-8');
		const arr = JSON.parse(raw);
		
		if(arr && !arr.find(item => item.id === obj.id)){
			arr.push(obj);
		}
		

		fs.writeFileSync(ITEMS_FILE, JSON.stringify(arr, null, 2), 'utf-8');

		console.log('uploaded');
		res.status(200);
  } catch (err) {
		res.status(500);
  }
});

app.patch('/items/:id', async(req, res) => {
	const id = req.params.id;
	const newData = req.body;

	try{
		const raw = fs.readFileSync(ITEMS_FILE, 'utf-8');
		const arr = JSON.parse(raw);

		const newArr = arr.map(item => item.id == id ? newData : item);

		fs.writeFileSync(ITEMS_FILE, JSON.stringify(newArr, null, 2), 'utf-8');
		console.log('edit done');
		res.json('edit done')
	}catch(err){
		console.log(err);
	}
}); 

app.delete('/items/:id', async(req, res) => {
	const id = req.params.id;
	
	try{
		const raw = fs.readFileSync(ITEMS_FILE, 'utf-8');
		const arr = JSON.parse(raw);

		const newArr = arr.filter(item => item.id !== id);

		fs.writeFileSync(ITEMS_FILE, JSON.stringify(newArr, null, 2), 'utf-8');
		console.log('item deleted');
		res.json('delete done')
	}catch(err){
		console.log(err);
	}
})

app.post('/transactions', async (req, res) => {
	const obj = req.body;
	// console.log(obj)
	try {
		const raw = fs.readFileSync(TRANSACTIONS_FILE, 'utf-8');
		let arr = JSON.parse(raw);
		
		if(arr){
			arr.push(obj);
		}

		arr = arr.sort((a,b) => b.time - a.time);

		fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(arr, null, 2), 'utf-8');
		console.log('done')
		res.json('done')
  } catch (err) {
		res.status(500);
  }
});

app.get('/refreshtransactions', async (req, res) => {
  await fetchAndCacheData();
  res.json({ message: 'done' });
});

let alreadyFetched = false;

// if (!alreadyFetched) {
// 	await fetchAndCacheTransactions();
// 	alreadyFetched = true;
// }

app.listen(PORT, () => {
	console.log('server started, port' + PORT);
});

app.post('/api/upload', upload.single('img'), (req, res) => {
	res.json(req.file.originalname);
});


// setInterval(() => {fetchAndCacheTransactions()}, 5 * 1000 * 60)

// const raw = fs.readFileSync(TRANSACTIONS_FILE, 'utf-8');
// let arr = JSON.parse(raw);
// arr = arr.sort((a,b) => b.time - a.time);
// fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(arr, null, 2), 'utf-8');
