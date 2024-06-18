import { Header } from "./components/header";
import { Post } from "./components/post";
import styles from "./App.module.css";
import "./global.css"
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post
            author="Mauricio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam! Recusandae minus similique, voluptatem iste nobis inventore est deserunt cum atque ad officiis? Nobis, dolorem debitis. Vel inventore sapiente repellendus."
          />
          <Post
            author="Mauricio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam! Recusandae minus similique, voluptatem iste nobis inventore est deserunt cum atque ad officiis? Nobis, dolorem debitis. Vel inventore sapiente repellendus."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
