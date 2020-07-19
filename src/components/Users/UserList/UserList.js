import React from "react";
import UserItem from "./UserItem/UserItem";

const userList = props => {
    const users = props.users.map(user => {
      return (
        <UserItem
 
          userId={user._id}
          First_name ={user.First_name}
        />
      );
    });
  
    return <ul >{users}</ul>;
  };
  

export default userList;
