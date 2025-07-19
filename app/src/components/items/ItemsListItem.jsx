import React from 'react';
import styles from './ItemsList.module.scss'
import {MoreOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {deleteItem} from '../../store/itemsSlice';

 

function ItemsListItem({obj}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        edit
      </a>
    ),
    icon: <EditOutlined />,
  },
  {
    key: '2',
    onClick: () => {
      dispatch(deleteItem(obj.id));
    },
    label: (
      <button>
        delete
      </button>
    ),
    icon: <DeleteOutlined />,
    
  },
]



	return (
		<div className={styles.itemWrapper}>
      <div className={styles.item} onClick={() => navigate(`/items/${obj.id}`)}>
        <img src={`/uploads/${obj.img}`} alt="" className={styles.img} />
        <h2 className={styles.title}>{obj.title}</h2>
        <p className={styles.price}>{obj.buyPrice}$</p>
        <p className={styles.price}>{obj.sellPrice}$</p>
        <p className={styles.date}>{obj.buyDate}</p>
        <p className={styles.date}>{obj.sellDate}</p>
      </div>
      <div className={styles.dropdown}>
        <Dropdown menu={{ items }} trigger='click'>
            <MoreOutlined />
        </Dropdown>
      </div>
    </div>
	);
}

export default ItemsListItem;