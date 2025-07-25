import React, { useRef, useState } from 'react';
import styles from './ItemConfigure.module.scss'
import { Field, Form, Formik } from 'formik';
import SelectTransaction from './../ItemsForm/SelectTransaction';
import BigBtn from '../btns/BigBtn';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { configureItem, editItems } from '../../store/itemsSlice';


function ItemConfigure({obj, closeConfiguration}) {
	
	const dispatch = useDispatch()
	const transactions = useSelector(state => state.transactions.transactions);

	const [accs, setAccs] = useState(obj.accs);
	const [accsRef, setAccsRef] = useState('');
	// const accsRef = useRef();

	const handleAccsAdd = (setFieldValue) => {
		setAccs([...accs, accsRef]);
		setFieldValue('accs' , accs)
	}

	const handleDeleteAccs = (item, setFieldValue) => {
		setAccs(accs.filter(i => i !== item));
		setFieldValue('accs' , accs)
	}

	return (
		<div className={styles.wrapper}>
			<Formik
				initialValues={{
					desc: obj.desc, 
					accs: obj.accs, 
					sellTransaction: '', 
					spendsAmount: 0, 
					deliveryTransaction: '',
					revenueAmount: 0
				}}
				onSubmit={(values) => {
					const deliveryTransaction = transactions.find(trn => trn.id == values.deliveryTransaction);
					const deliverySpends = obj.deliveryTransactionId ? 0 : deliveryTransaction?.amount * -1 || 0;
					
					const sellDate = obj.sellDate || values.sellTransaction ? moment(values.sellTransaction.time).format('lll') : '';
					const sellPrice = obj.sellPrice || transactions.find(trn => trn.id == values.sellTransaction)?.amount || 0;
					const sellTransactionId = values.sellTransaction;
					const spendsAmount = ((parseFloat(obj.spendsAmount) || 0) + parseFloat(deliverySpends) + parseFloat(values.spendsAmount) - parseFloat(values.revenueAmount)) || 0;

					console.log(accs)


					const newObj = {
						...obj,
						desc: values.desc,
						sellPrice,
						sellDate,
						spendsAmount,
						sellTransaction: obj.sellTransaction || sellTransactionId,
						totalPrice: (parseFloat(obj.buyPrice) + parseFloat(spendsAmount)).toFixed(2),
						deliveryTransactionId: obj.deliveryTransactionId || values.deliveryTransaction,
						accs: [...accs],
					}
					console.log(newObj);
					dispatch(configureItem(newObj));
					dispatch(editItems({data: newObj, id: obj.id}))
					closeConfiguration();
				}}
			>
			{({isSubmitting, setFieldValue}) => 
				<Form>
				
					<div className={styles.group}>
						<label htmlFor="desc" className={styles.label}>Enter description of item</label>
						<Field
							as="textarea"
							name="desc"
							rows="4"
							className={styles.textarea}
							placeholder='Item desription'
						/>
					</div>
					<div className={styles.group}>
						<p className={styles.label}>Accesories</p>
						{accs.map(item => 
							<label className={styles.checkboxLabel} key={item}>
								<input type="checkbox" name="accs" value={item} checked={accs.includes(item)} onChange={() => handleDeleteAccs(item, setFieldValue)}/>
								{item}
							</label>
						)}
						<p className={`${styles.label} ${styles.accsLabel}`}>Add yours</p>
						<div className={styles.miniGroup}>
							<input type='text' className={styles.accsAdd} placeholder='accesories' onChange={(e) => setAccsRef(e.target.value)}/>
							<button className={styles.accsBtn} type='button' onClick={() => handleAccsAdd(setFieldValue)}>Add</button>
						</div>
					</div>
					{!obj.deliveryTransactionId && <div className={styles.group}>
						<label htmlFor="deliveryTransaction" className={styles.label}>Select delivery transaction</label>
						<Field name='deliveryTransaction' className={styles.input}>
							{({field, form}) => 
								<SelectTransaction 
									value={field.value} 
									onChange={value => form.setFieldValue('deliveryTransaction', value)}
									filtredBy='Meest'
								/>
							}
						</Field>
					</div>}
					{!obj.sellTransaction && <div className={styles.group}>
						<label htmlFor="sellTransaction" className={styles.label}>Select sold transaction</label>
						<Field name='sellTransaction' className={styles.input}>
							{({field, form}) => 
								<SelectTransaction 
									value={field.value} 
									onChange={value => form.setFieldValue('sellTransaction', value)}
									filtredBy='amount'
								/>
							}
						</Field>
					</div>}
					<div className={styles.group}>
						<label htmlFor="spendsAmount" className={styles.label}>Spends</label>
						<Field name='spendsAmount' className={styles.input} placeholder='Enter spent amount'/>
					</div>
					<div className={styles.group}>
						<label htmlFor="revenueAmount" className={styles.label}>Revenue from accs</label>
						<Field name='revenueAmount' className={styles.input} placeholder='Enter sold accs amount'/>
					</div>
					<BigBtn disabled={isSubmitting} text='Submit configuration' type='submit'/>

			</Form>
			
			}
			
			</Formik>
		</div>
	);
}



export default ItemConfigure;