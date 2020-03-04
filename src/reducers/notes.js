const initialState = {
    notes: [],
    note: {},
    id: null
}

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                notes: state.notes.concat({id:action.payload.id, title:action.payload.title, body:action.payload.body})
            }
        case 'DELETE': 
            return {
                ...state,
                notes:state.notes.filter(note => note.id !== action.id)
            }
        case 'ADDNOTEFORUPDATE': 
            return {
                ...state,
                note: state.notes.find(note => note.id === action.id),
                id: action.id
            }
        case 'UNSETNOTE' : 
            return {
                ...state,
                note: {}
            }
        case 'UPDATENOTE':
            const noteIndex = state.notes.findIndex(note => note.id === action.payload.id);
            const updatedNotes = [...state.notes];
            if(updatedNotes[noteIndex].title !== action.payload.title || updatedNotes[noteIndex].body!==action.payload.body){
                updatedNotes[noteIndex].title = action.payload.title; 
                updatedNotes[noteIndex].body = action.payload.body;
            }
            return {
                ...state,
                notes : updatedNotes,
                id: null
            }
        default: return state
    }
}

export default reducer;