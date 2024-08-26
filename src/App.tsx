import { Header } from "./components/header";
import { Post } from "./components/post";
import styles from "./App.module.css";
import "./global.css"
import { Sidebar } from "./components/sidebar";

const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/95001318?v=4",
      name: "Mauricio Costa",
      role: "Web develper",
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋' },
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link', content:'👉 <a href="">jane.design/doctorcare</a>' },
      {type:'link', content:'<a href="">#novoprojeto #nlw #rocketseat</a>' }
    ],
    publishedAt:new Date('2022-05-03 20:00:00')
  },
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/95001318?v=4",
      name: "Mauricio Costa",
      role: "Web develper",
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋' },
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link', content:'👉 <a href="">jane.design/doctorcare</a>' },
      {type:'link', content:'<a href="">#novoprojeto #nlw #rocketseat</a>' }
    ],
    publishedAt:new Date('2022-05-03 20:00:00')
  },
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/95001318?v=4",
      name: "Mauricio Costa",
      role: "Web develper",
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋' },
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link', content:'👉 <a href="">jane.design/doctorcare</a>' },
      {type:'link', content:'<a href="">#novoprojeto #nlw #rocketseat</a>' }
    ],
    publishedAt:new Date('2022-05-03 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {
            posts.map( post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  );
}

export default App;
