import React from "react";
import { useDispatch} from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteUser } from "../../Redux/actions/adminAction";
import EditUser from "./EditUser";
import NavBar from "../NavBar/navBar";

const UserCard = ({user}) => {
  const dispatch= useDispatch()
  const delet = () => {
    dispatch(deleteUser(user._id));
  };

  return (<div>
   
  <List>
  <ListItem key={user._id}  dense button >
      
      <ListItemText  primary={user.name} />
      <ListItemText  primary={user.lastName} />
      <ListItemText  primary={user.email} />
      <ListItemText  primary={user.role} />
      <ListItemSecondaryAction>
      <IconButton edge="end" >
          <EditUser user={user} />
        </IconButton>
        <IconButton edge="end" >
          <DeleteIcon color="success" onClick={delet} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
</List>
    </div>
  );
};

export default UserCard;