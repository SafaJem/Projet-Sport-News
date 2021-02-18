import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';


const CardReclamation = ({
    reclamation: { reclamation, name ,_id ,date },
 
}) => {
  return (
    <List>
    <ListItem key={_id} role={undefined} dense button >
    
    <ListItemText  primary={name} />
    <ListItemText  primary=  {reclamation} />
    <ListItemText> {date.slice(0, 10)} ---{" "}
          {date.slice(11, 19)} </ListItemText>
 <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="Message">
        <EmailIcon style={{color:'green'}} />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  </List>
  );
};



export default CardReclamation; 