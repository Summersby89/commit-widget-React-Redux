import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CommentList = (props) => {
    const {commentList, deleteComment} = props;
    let newsTemplate;

    if(commentList.comments.length) {
        newsTemplate = commentList.comments.map( (comment) => {
            
            return ( 
    
        <Card>
            <CardContent>
                <li key={comment.id}>  
            
                    <Typography color="textSecondary" gutterBottom> Автор: </Typography>
                    <Typography variant="body2" component="p"> {comment.author} </Typography> 
                    <Typography color="textSecondary" gutterBottom> Комментарий: </Typography>
                    <Typography variant="body2" component="p"> {comment.comment} </Typography> 
                    <Typography color="textSecondary" gutterBottom> Дата: </Typography> 
                    <Typography variant="body2" component="p"> {comment.date} </Typography> 

        <IconButton 
                aria-label="delete"
                className="js-delete-comment" 
                title="удалить" 
                onClick={
                    () => {
                        deleteComment(comment.id)
                    }
                }
            >
            <DeleteIcon fontSize="large" />
        </IconButton>
        
                </li>
            </CardContent>
        </Card>
            )
        })
    } else {
        newsTemplate = <Typography variant="body2" component="p"> Пока ни одного комментария </Typography> 
    }

    return (
        <div>
            <hr/>
                <h3>Все комментарии</h3>
                    <ol>
                        {newsTemplate}
                    </ol>
        </div>
    )
}

export default CommentList;