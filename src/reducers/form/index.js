
const initialState = {   
    author: '',
    comment: ''
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_AUTHOR' : 
            return {
                ...state, author: action.newVal
            }
        case 'CHANGE_COMMENT' : 
            return {
                ...state, comment: action.newVal
            }

        default: 
            return  state;   
                
    }
}

export default formReducer;