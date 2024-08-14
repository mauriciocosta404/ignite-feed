import React from "react";
import styles from "./index.module.css";
import { Comment } from "../comment";

interface PostPros {
  author: string;
  content: string;
}

export const Post: React.FC<PostPros> = ({ author, content }) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/95001318?v=4"/>
          
          <div className={styles.authorInfo}>
            <strong>Mauricio Costa</strong>
            <span>Web Developer</span>
          </div>

        </div>

        <time title="11 de Maio as 8:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
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
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
};
