import React, { useState } from 'react';
import styles from './ItemsNav.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal } from 'antd';
import BigBtn from './../btns/BigBtn';
import { useNavigate } from 'react-router';

function ItemsNav(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	const sort = [
		{
			key: '1',
			label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				edit
			</a>
			),
		},
		{
			key: '2',
			label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
				delete
			</a>
			),
		},
	]
	const show = [
		{
			key: '1',
			label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				edit
			</a>
			),
		},
		{
			key: '2',
			label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
				delete
			</a>
			),
		},
	]
	const showModal = () => {
    	setIsModalOpen(true);
  	};

  	const handleOk = () => {
    	setIsModalOpen(false);
  	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={styles.nav}>
			<BigBtn text='Add item' onClick={() => navigate('/createitem')}/>
			<form action="">
				<input type="text"  placeholder='search items' className={styles.searchInput}/>
				<div className={styles.searchBtn}>
					<SearchOutlined />
				</div>
			</form>
			<div className={styles.dropdown}>
				<Dropdown menu={{ items: show }} trigger='click'>
					<button className={`${styles.btn} ${styles.showBtn}`}>Shown by: </button>
				</Dropdown>
			</div>
			<div className={styles.dropdown}>
				<Dropdown menu={{ items: sort }} trigger='click'>
					<button className={`${styles.btn} ${styles.sortBtn}`}>Sort by: </button>
				</Dropdown>
			</div>
			<div className={styles.modal}>
				<Button type="primary" onClick={showModal} className={`${styles.modalBtn} ${styles.btn}`}>
        			Open Modal
				</Button>
				<Modal
					title="Basic Modal"
					closable={{ 'aria-label': 'Custom Close Button' }}
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		</div>
	);
}

export default ItemsNav;