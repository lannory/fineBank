import React from 'react';
import {Field, Form, Formik} from 'formik';
import styles from './TransactionsForm.module.scss'
import BigBtn from '../btns/BigBtn';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addTransaction, postTransactions } from '../../store/transactionsSlice';


function TransactionsForm(props) {

	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={{
				description: '',
				amount: '',
				type: '',
				time: '',
			}}
			onSubmit={(values)=>{
				const time = moment(values.time).valueOf();
				const obj = {
					amount: values.amount,
					type: values.type,
					time,
					description: values.description,
				}
				dispatch(postTransactions(obj));
			}}
		>
			{({isSubmitting}) => (
				<Form>
					<div className={styles.group}>
						<label htmlFor="title" className={styles.label}>Enter name of item</label>
						<Field
							type="text"
							name="description"
							className={styles.input}
							placeholder='transaction description'
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="title" className={styles.label}>Enter name of item</label>
						<Field
							type="text"
							name="type"
							className={styles.input}
							placeholder='transaction type'
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="purchase" className={styles.label}>Date</label>
						<Field
							type="datetime-local"
							name="time"
							className={styles.input}
							placeholder='Item desription'
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="purchase" className={styles.label}>Transaction amount</label>
						<Field
							type="number"
							name="amount"
							className={styles.input}
							placeholder='amount'
						/>
					</div>
					<BigBtn text={'Create transaction'} disabled={isSubmitting} type='submit'/>
				</Form>
			)}
		</Formik>
	);
}

export default TransactionsForm;