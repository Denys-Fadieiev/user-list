import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa'

class UserListItem extends Component {
  render() {
    const { usersData, handleSelect } = this.props;
    // const { id, name, nickName, img, age, gender, isSelected, } = usersData;

    const userListItem = usersData.map(({ id, name, nickName, img, age, gender, isSelected, }) => (
      <li
        id={id}
        key={id}
        onClick={() => handleSelect(id)}
      >
        <img src={img.src} alt={img.alt} />
				<div>
					<div>
						<p>{name}</p>
						<p>{nickName}</p>
					</div>
					<div>
						<button type="submit">
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
