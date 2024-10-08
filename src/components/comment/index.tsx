import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './index.module.css'
import { Avatar } from '../avatar'
import React, { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (content: string) => void;
}

export const Comment:React.FC<CommentProps> = ({content, onDeleteComment}) =>{
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () =>{
        onDeleteComment(content);
    }

    const hadleLikeComment = () =>{
        setLikeCount(prev => prev + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/95001318?v=4" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maurício Costa</strong>
                            <time title="11 de Maio as 8:13" dateTime="2022-05-11 08:13:30">Cerca d e 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'> 
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={hadleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
} 