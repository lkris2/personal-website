import "/Users/lakshmikrishnan/Desktop/latest/src/App.css";
import Carousel from './components/Carousel';

import { memoirs } from './components/Data';
import NavBar from "./navigate/NavBar";



export default function App(){

  
  
  return (<div><h1 className = "topContent"> The Brilliant Spotlight</h1>
  <h2 className = "name-content">Lakshmi Krishnan</h2>
 
 
 <div className = "nav-app"><NavBar/></div>
 
 
 
 
<Carousel images = {memoirs}/>
 
<h2>This is where I write about my journey of life, facts that matter a lot to the world that hasn't been realized yet. Whether it is to save the world by bringing awareness of people psychology or computer science that has brought a lot of advantages
  that balances out with the disadvantages that it brings. I consider acting as a way to evolve and learn from characters, that's a way of self-persuasion, to also impart knowledge through my work. It is my comfort zone that keeps my creative thinking alive, while taking a break from being an avid coder.</h2>
  <h2>During my role as a coder, I've always been curious to try out every language possible, to be as experienced as a freelance coder's immense range of options can be. All my work as a part of school curriculum and outside of it, are available under the GitHub section. One domain that I've totally admired to experiment the most, is Machine Learning and Artifical Intelligence.</h2>
 
</div>
 
 
 
 
);
}
 
 