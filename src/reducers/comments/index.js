
const initialState = {
    comments : []
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMMENTS':  
            return state; 
        case 'ADD_COMMENT':  
            return { ...state,comments:[action.comment,...state.comments]};  
        case 'DELETE_COMMENT': 
            const updateList = {
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
            return updateList;
        default: 
            return  state;   
                
    }
}

export default commentsReducer;