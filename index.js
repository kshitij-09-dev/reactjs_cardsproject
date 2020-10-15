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

{Sdata.map((val) =>
{
    return(
    
  <Card imgsrc={val.imgsrc}
      sname={val.sname}
  />
 
    );
    }

)}

<Fhook/>


<Formh/>


</>, 
document.getElementById('root'));
