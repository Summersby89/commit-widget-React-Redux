import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const AddComment = (props) => { 
    const {handleAuthor, handleComment, addComment} = props;

     // дата и время комментария
     const getDateComment = () => {
        var m = new Date();
        const date = `${m.getDate()}.${m.getMonth()}.${m.getFullYear()}`;
        const time = `${m.getHours()}:${m.getMinutes()}:${m.getSeconds()}`;
        const dateTime = `${date} ${time}`;

        return dateTime;
    }

    // валидация полей ввода 
    const validateInput = (str) => {
        if(str.match(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig)) {
            return false;
        } 
        return true;        
    }

    // общая проверка
    const validateComment = (ev) => {
        ev.preventDefault();
        const authorVal = props.author.trim()
        const commentVal = props.comment.trim()
        
        // проверяем на заполненность полей автор комментарий
        if(authorVal && commentVal) {
            if(validateInput(props.author) && validateInput(props.comment)) {
                return true;

            } else {
                alert('поля содержат недопустимые символы');
            }     
            } else {
                alert('поля является обязательным! вы ввели пустое значение');
            }       		
        }

    return (
        <form onSubmit={
            (ev) => {
                if(validateComment(ev)) {
                    addComment({
                        id: Date.now(),
                        author: props.author,
                        comment: props.comment,
                        date: getDateComment()
                    }); 
                }                            
            }
        }>         
            <h1 className="main-heading">Оставьте комментарий:</h1>
            <div>
                <TextField 
                    id="outlined-basic" 
                    label="Ваше имя" 
                    variant="outlined"     
                    value={props.author}
                    onChange={(ev) => { 
                    handleAuthor(ev);
                    }}                    
                />
            </div>

            <div>
                <TextField 
                    id="outlined-basic" 
                    label="Комментарий" 
                    variant="outlined" 
                    type="text" 
                    name="comment" 
                    value={props.comment}
                    onChange={(ev) => {
                    handleComment(ev)
                }}                  
            />    
            </div>             

            <div className="btn-wrapper">
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    endIcon={<SendIcon/>}>Добавить</Button>
            </div>
        </form>
    )
}

export default AddComment;