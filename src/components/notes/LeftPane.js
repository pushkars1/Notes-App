import React, { Fragment } from "react";
import {connect} from 'react-redux';
import { Paper } from "@material-ui/core";
import {deleteNote, addNoteForUpdate, unsetNote} from '../../actions/notes';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  makeStyles
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
    listItem : {
        cursor: 'pointer'
    }
});

const LeftPane = (props) => (
  <Paper style={props.styles.Paper}>
    {props.note.notes && (<List>
      {props.note.notes.map(note => (
        <Fragment key={note.id}>
          <Item {...props} note={note}/>
          <Divider />
        </Fragment>
      ))}
    </List>)}
  </Paper>
);

const Item = (props) => (
    <ListItem alignItems="flex-start" onMouseDown={() => props.onAddNoteForUpdate(props.note.id)} onMouseUp={() => props.onUnsetNote(props.note.id)} className={useStyles().listItem} > 
        <ListItemText primary={props.note.title} secondary={props.note.body} />
        <ListItemSecondaryAction onClick={() => props.onDeleteNote(props.note.id)}>
            <IconButton edge="end">
            <ClearIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
);

const mapStateToProps = state => {
    return {
        note : state.note
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteNote : (id) => dispatch(deleteNote(id)),
        onAddNoteForUpdate: (id) => dispatch(addNoteForUpdate(id)),
        onUnsetNote: (id) => dispatch(unsetNote(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);