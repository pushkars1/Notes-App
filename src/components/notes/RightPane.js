import React, {useState, useRef}  from "react";
import uuid from 'react-uuid';
import {connect} from 'react-redux';
import {addNote} from '../../actions/notes';
import SaveIcon from '@material-ui/icons/Save';
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  makeStyles,
  TextareaAutosize
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {updateNote} from '../../actions/notes';

const useStyles = makeStyles({
  root: {
    float: "right",
    marginBottom: "32px"
  },
  textArea: {
    width: "99%",
    borderRadius: "4px"
  },
  clear: {
    clear: "both"
  },
  save : {
      float: 'right',
      marginTop: '50px'
  },
  titleAndBody : {
      float:'left',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '5px'
  },
  formControl: {
      marginBottom: '30px'
  }
});

const RightPane =  (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const titleRef = useRef();
    const bodyRef = useRef();

    const setTitleHandler = (event) => {
        setTitle(event.target.value)
    }

    const setBodyHandler = (event) => {
        setBody(event.target.value)
    }

    const addNoteBtnHandler = () => {
        titleRef.current.value = '';
        bodyRef.current.value = '';
    }

    return (
        <Paper style={props.styles.Paper}>
            <Button
                variant="outlined"
                className={useStyles().root}
                startIcon={<AddIcon />}
                onClick={addNoteBtnHandler}
            >
                Add Note
            </Button>
            <div className={useStyles().clear} />
            <InputLabel htmlFor="title" className={useStyles().titleAndBody}>Title:</InputLabel>
            <FormControl fullWidth variant="outlined" className={useStyles().formControl} >
                <OutlinedInput
                id="title"
                value={props.note.note ? props.note.note.title: title}
                onChange={setTitleHandler}
                inputRef={titleRef}
                
                />
            </FormControl>
            <InputLabel htmlFor="body" className={useStyles().titleAndBody}>Body:</InputLabel>
            <TextareaAutosize id="body" className={useStyles().textArea} rowsMin={11} value={props.note.note ? props.note.note.body: body} onChange={setBodyHandler} ref={bodyRef}/>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={useStyles().save}
                startIcon={<SaveIcon />}
                onClick={() => props.onAddNote(uuid(), title, body)}
            >
                Save
            </Button>
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        note: state.note
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNote : (id,title,body) => dispatch(addNote({id:id,title:title,body:body})),
        onUpdateNote: (id, title, body) => dispatch(updateNote({id:id,title:title,body:body})) 
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(RightPane);