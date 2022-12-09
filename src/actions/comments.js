export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}

export function deleteComment(id) {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}

export function getComment() {
    return {
        type: 'GET_COMMENT'
    }
}