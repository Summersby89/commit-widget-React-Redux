
export function handleAuthor(ev) {
    const newVal = ev.target.value;
    return {
        type: 'CHANGE_AUTHOR',
        newVal
    }
}

export function handleComment(ev) {
    const newVal = ev.target.value;
    return {
        type: 'CHANGE_COMMENT',
        newVal
    }
}