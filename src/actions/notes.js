export const addNote = (payload) => {
    return {
        type: 'ADD',
        payload: payload
    }
}

export const deleteNote = (id) => {
    return {
        type: 'DELETE',
        id: id
    }
}

export const addNoteForUpdate = (id) => {
    return {
        type: 'ADDNOTEFORUPDATE',
        id:id
    }
}

export const unsetNote = (id) => {
    return {
        type: 'UNSETNOTE',
        id:id
    }
}

export const updateNote = (payload) => {
    return {
        type: 'UPDATENOTE',
        payload: payload
    }
}