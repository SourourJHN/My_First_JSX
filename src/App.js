
import React from 'react';
import './App.css'
import './Style.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 10px black", maxWidth:'100vw'}} >

       <h1 className="title red">Your name here</h1><br/>

       <img src={imageInSrc} alt='Myimage'/><br/>
       <img src="/imageInPublic.jpg" alt='Myimage'/>
      </div>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QSBxc2SfT_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    
    </div>
  );
}

export default App;
