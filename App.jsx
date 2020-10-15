import React from 'react';

function App() {

    
let curDate=new Date();
curDate=curDate.getHours();
let greeting=" ";
const cssStyle={};

if(curDate>=1 && curDate < 12){
  greeting="GOOD MORNING";
  cssStyle.color="green";
}else if(curDate>=12 && curDate < 16){
  greeting="GOOD AFTERNOON";
  cssStyle.color="orange";
}else{
  greeting="GOOD EVENING";
  cssStyle.color="blue";
}
return(
  <React.Fragment>
  <div className="greet">
  <h1>HELLO SIR, <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </React.Fragment>


);

}



function Card(props){
  //console.log(props);
  return(
    <>
    <div className="cardbg">
  <div className="card ">
    <img src={props.imgsrc} alt="img" width="100%" height="235px"/>
    <div className="container">
    <center>
      <h4 className="title">{props.sname}</h4>
     <button>Watch now</button></center>
      <br></br>
      </div>
  </div>
  </div>
  </>
  );
  }


  


export default App;
export {Card};

