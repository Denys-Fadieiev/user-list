import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa'
import styles from './UserListItem.module.scss';

const { wrapperListItemSelect, wrapperListItemDefault } = styles;

class UserListItem extends Component {
  render() {
    const { usersData, handleSelect } = this.props;
    // const { id, name, nickName, img, age, gender, isSelected, } = usersData;

    const userListItem = usersData.map(({ id, name, nickName, img, age, gender, isSelected, }) => (
      <li
        className={`${styles.wrapperListItem} ${
        isSelected ? wrapperListItemSelect : wrapperListItemDefault
      }`}
        id={id}
        key={id}
        onClick={() => handleSelect(id)}
      >
        <img className={styles.userImg} src={img.src} alt={img.alt} />
				<div className={styles.wrapperItem}>
					<div>
						<p className={styles.name}>{name}</p>
						<p className={styles.nickName}>{nickName}</p>
					</div>
					<div className={styles.wrapperBtn}>
						<button className={styles.btn} type="submit">
							<FaTrash/>
						</button>
					</div>
				</div>
      </li>
    ));

    return (
      <>
        {userListItem}
      </>
    );
  }
}

export default UserListItem;
