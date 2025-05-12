import { Post } from "./components/Post";
import './App.css'
import { useState } from "react";
const App = () => {
  const [activeId, setActiveId] = useState(false);
  return(
    <div>
      <section className="container">
            <header>
                <h1>The Accordion</h1>
            </header>
            <Post />
        </section>
    </div>
  );
}

export default App;