import React, { Component } from 'react';
import { v4 } from 'uuid';
import styles from './UserList.module.scss'
import UserListItem from '../UserListItem';


class UserList extends Component {
  state = {
    usersData: [
      {
        id: v4(),
        name: "David Guetta",
        nickName: "@DavGuetta",
        img: {
          src: "https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhdmlkZ3VldHRhLmpwZz9kYXRlVXBkYXRlZD0xNDgwOTU3MDM3MDAw",
          alt: "David Guetta photo",
        },
        age: 55,
        gender: "male",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Rachel Anne McAdams",
        nickName: "@RA_McAdams",
        img: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiKqUgVa0LXJNuIglIqrrjc_Bt5IzKfA6cg&usqp=CAU",
          alt: "Rachel Anne McAdams",
        },
        age: 44,
        gender: "female",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Mila Kunis",
        nickName: "@MiKun",
        img: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TkAdnIPkP9ZZa7Y18ZfI4xS4e_ZO8As7bA&usqp=CAU",
          alt: "Mila Kunis photo",
        },
        age: 39,
        gender: "female",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Johny Depp",
        nickName: "@Johny_D",
        img: {
          src: "https://www.rabstol.net/uploads/gallery/main/94/rabstol_net_johnny_depp_14.jpg",
          alt: "Johny Depp photo",
        },
        age: 59,
        gender: "male",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Armin van Buuren",
        nickName: "@Arm_vB",
        img: {
          src: "https://img.tsn.ua/cached/187/tsn-1358a5fc43e0be7be1f42d9d95137a9f/thumbs/x/05/ae/d12f117b10a2e196f91740e19ce7ae05.jpeg",
          alt: "Armin van Buuren photo",
        },
        age: 46,
        gender: "male",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Monica Bellucci",
        nickName: "@Monica_Bellucci",
        img: {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Monica_Bellucci_by_Eric_Nehr.jpg/1200px-Monica_Bellucci_by_Eric_Nehr.jpg",
          alt: "Monica Bellucci photo",
        },
        age: 58,
        gender: "female",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Marshall Bruce Mathers III",
        nickName: "@Eminem",
        img: {
          src: "https://c4.wallpaperflare.com/wallpaper/102/473/295/eminem-music-rap-wallpaper-preview.jpg",
          alt: "Eminem",
        },
        age: 50,
        gender: "male",
        isSelected: false,
      },
      {
        id: v4(),
        name: "Anjelina Jolie",
        nickName: "@A_Jolie",
        img: {
          src: "https://deadline.com/wp-content/uploads/2022/03/Angelina-Jolie-photo-Netflix-Alexei-Hay-e1646407877581.jpeg",
          alt: "Anjelina Jolie photo",
        },
        age: 47,
        gender: "female",
        isSelected: false,
      },
    ],
  };

handleSelect = (userId) => {
  this.setState({
    usersData: this.state.usersData.map((user) => {
      return {
        ...user,
        isSelected: userId === user.id ? !user.isSelected : user.isSelected,
      };
    }),
  });
};

  render() {
    return (
      <ul className={styles.wrapperList}>
        <UserListItem
          usersData = {this.state.usersData}
          handleSelect = {this.handleSelect}
        />
      </ul>
    );
  }
}

export default UserList;
