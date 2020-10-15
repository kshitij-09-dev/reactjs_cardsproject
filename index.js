import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP, { strng, ghost, Add, Card,} from './App.jsx';
import Sdata from './sdata.jsx';
import Fhook from './events.jsx';
import Formh from './formhand.jsx';

  
ReactDOM.render(
<>

{APP()}
{/*
lets add the numbers 10+10={Add(10,10)}
<h2>{strng}</h2>
<h2>{ghost}</h2>
<h1>CHOOSE BEST 5 NETFLIX SERIES</h1>
<ol>
    <li>DARK</li>
    <li>DARK 2</li>
    <li>DARK 3</li>
</ol>*/}

{Sdata.map((val) =>
{
    return(
    
  <Card imgsrc={val.imgsrc}
      sname={val.sname}
  />
 
    );
    }

)}

{/*hook*/}

<Fhook/>

{/*hookend*/}

{/*form*/}

<Formh/>

{/*formend*/}

</>, 
document.getElementById('root'));
