import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./index.module.css";
import { Comment } from "../comment";
import { Avatar } from "../avatar";
import {format, formatDistanceToNow} from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface Author{
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content{
  type: 'paragraph'|'link';
  content: string;
}

interface PostPros {
  author: Author;
  content: Content[];
  publishedAt: Date;
}


export const Post: React.FC<PostPros> = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState<string[]>([
    "post muito bacana hein!"
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewCommet = (event: FormEvent) =>{
    event?.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  const handleNewCoommentChange = (event: ChangeEvent<HTMLTextAreaElement>) =>{
    event?.target.setCustomValidity("");

    setNewCommentText(event?.target.value);
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) =>{
    event?.target.setCustomValidity("esse campo é obrigatório");
  }

  const deleteComment = (commentToDelete: string) =>{
    const commentWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete;
    })

    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toDateString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if(line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
            if(line.type === 'link') return <p key={line.content}><a href="">{line.content}</a></p>
          })
        }
      </div>

      <form onSubmit={handleCreateNewCommet} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          required
          onInvalid={handleNewCommentInvalid} 
          value={newCommentText} 
          onChange={handleNewCoommentChange} 
          placeholder="deixe um comentário..." 
          name="comment" 
        />
        
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment 
                onDeleteComment={deleteComment} 
                key={comment} 
                content={comment}
              />
            )
          })
        }
      </div>
    </article>
  );
};
