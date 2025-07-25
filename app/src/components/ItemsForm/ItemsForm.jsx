import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ItemsForm.module.scss';
import BigBtn from '../btns/BigBtn';
import SelectTransaction from './SelectTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, postItems } from '../../store/itemsSlice';
import { useNavigate } from 'react-router';
import moment from 'moment';

function ItemsForm(props) {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const transactions = useSelector(state => state.transactions.transactions);

	return (
		<Formik
			initialValues={{title: '', desc: '', purchase: '', select: '', img: '', cond: '',accs: [] }} 
			onSubmit={async (values, {resetForm}) => {
				console.log(122)
				const formData = new FormData();
				formData.append('img', values.img);
				console.log(values);
				const response = await fetch('http://localhost:3001/api/upload', {
					method: 'POST',
					body: formData
				});

				const img = await response.json();
				console.log(img);

				const buyPrice = (transactions.find(transaction => transaction.id === values.select)).amount * -1;

				console.log(values.accs)

				const obj = {
					id: Date.now(),
					title: values.title,
					desc: values.desc,
					buyDate: moment(values.purchase, 'YYYY-MM-DD').format('ll'),
					buyTransactionId: values.select,
					img,
					cond: values.cond,
					accs: [...values.accs],
					buyPrice,
					tests: [
						{type: 'no sd errors', isCompleted: false},
						{type: 'overheating', isCompleted: false},
						{type: 'micro', isCompleted: false},
						{type: 'false', isCompleted: false}
					]
				}
				dispatch(postItems(obj))
				console.log('item posted')
				navigate('/items')
			}}
		>
			{({isSubmitting, setFieldValue}) => (
				<Form>
				<div className={styles.group}>
					<label htmlFor="title" className={styles.label}>Enter name of item</label>
					<Field
						type="text"
						name="title"
						className={styles.input}
						placeholder='Item title'
					/>
				</div>
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
					<label htmlFor="title" className={styles.label}>Enter condition of item</label>
					<Field
						type="text"
						name="cond"
						className={styles.input}
						placeholder='Item condition'
					/>
				</div>
				<div className={styles.group}>
					<label htmlFor="purchase" className={styles.label}>Purchase date</label>
					<Field
						type="date"
						name="purchase"
						className={styles.input}
						placeholder='Item desription'
					/>
				</div>
				<div className={styles.group}>
					<label htmlFor="select" className={styles.label}>Purchase date</label>
					<Field name='select' className={styles.input}>
						{({field, form}) => (
							<SelectTransaction 
								value={field.value}
								onChange={value => form.setFieldValue('select', value)}
								filtredBy='eBay'
							/>
						)}
					</Field>
				</div>
				<div className={styles.group}>
					<label htmlFor="img" className={styles.label}>Photo</label>
					<input
						type="file"
						name="img"
						className={styles.input}
						onChange={(event) => {
							setFieldValue('img', event.currentTarget.files[0]);
          			}}
        		/>
				</div>
				<div className={styles.group}>
					<p className={styles.label}>Accesories</p>
					<label className={styles.checkboxLabel}>
						<Field type="checkbox" name="accs" value="battery"/>
						Battery
					</label>
					<label className={styles.checkboxLabel}>
						<Field type="checkbox" name="accs" value="case" />
						Case
					</label>
					<label className={styles.checkboxLabel}>
						<Field type="checkbox" name="accs" value="mounts" />
						Mounts
					</label>
				</div>
				<BigBtn disabled={isSubmitting} text='create item' type='submit'/>
			</Form>
			)}
			

		</Formik>
	);
}

export default ItemsForm;