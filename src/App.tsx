import { Header } from "./components/header";
import { Post } from "./components/post";

import "./global.css"

function App() {
  return (
    <div>
      <Header/>

      <Post
        author="Mauricio"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam! Recusandae minus similique, voluptatem iste nobis inventore est deserunt cum atque ad officiis? Nobis, dolorem debitis. Vel inventore sapiente repellendus."
      />
    </div>
  );
}

export default App;
