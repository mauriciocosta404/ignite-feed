import React from "react";
import styles from "./index.module.css";
import { Comment } from "../comment";
import { Avatar } from "../avatar";

interface Author{
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content{
  type: string;
  content: string;
}

interface PostPros {
  author: Author;
  content: Content[];
  publishedAt: Date;
}


export const Post: React.FC<PostPros> = ({ author, content, publishedAt }) => {
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

        <time title="11 de Maio as 8:13" dateTime={publishedAt.toDateString()}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="deixe um comentário..." name="" id=""></textarea>
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          Array.from({length:5}).map(()=>{
            return (<Comment/>)
          })
        }
      </div>
    </article>
  );
};
