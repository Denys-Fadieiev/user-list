import classNames from "classnames";
import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./UserListItem.module.scss";

const { wrapperListItemSelect } = styles;

class UserListItem extends Component {
	render() {
		const { usersData, handleSelect, handleDelete } = this.props;

		const userListItem = usersData.map(
			({ id, name, nickName, img, age, gender, isSelected }) => (
				<li
					className={classNames(styles.wrapperListItem, {[wrapperListItemSelect] : isSelected})}
					id={id}
					key={id}
				>
					<div 
            className={styles.wrapperItem}
            onClick={() => handleSelect(id)}>
						<img className={styles.userImg} src={img.src} alt={img.alt} />
							<div>
								<p className={styles.name}>{name}</p>
								<p className={styles.nickName}>{nickName}</p>
							</div>
					</div>
					<div className={styles.wrapperBtn}>
						<button
							className={styles.btn}
							type="submit"
							onClick={() => handleDelete(id)}
              
						>
							<FaTrash />
						</button>
					</div>
				</li>
			)
		);

		return <>{userListItem}</>;
	}
}

export default UserListItem;
