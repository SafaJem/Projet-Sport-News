import React, { Fragment } from 'react';
import {useDispatch} from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import { deleteComment } from '../../../Redux/actions/articleAction';


const CardCommentaire = ({
  comment: { commentaire, name ,_id ,date },idArticle
 
}) => {

  const dispatch = useDispatch();
  const deletComm = () => {
    dispatch(deleteComment(idArticle , _id));
  };


  return (
    <List>
    <ListItem key={_id} role={undefined} dense button >
    <IconButton edge="end" aria-label="comments">
                <CommentIcon  style={{color:'green'}} />
              </IconButton> {" "}
    <ListItemText  primary={name} />
    <ListItemText  primary={commentaire} />
    <ListItemText> {date.slice(0, 10)} ---{" "}
          {date.slice(11, 19)} </ListItemText>
 <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="comments">
        <DeleteIcon style={{color:'green'}} onClick={deletComm}/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  </List>
  );
};



export default CardCommentaire; 