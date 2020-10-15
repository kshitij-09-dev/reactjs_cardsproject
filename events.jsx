import React, { useState } from "react";

const Fhook = () =>{

    const white= "#ffffff";
    const[bg,setbg] = useState(white);
    
    const bgChange = () =>{
       let newBg = "#000000"; 
       setbg(newBg);
    }

    const bgBack = () =>{
        setbg(white);
    }

    return(
      <>
      
      <div className="fhook" style={{backgroundColor: bg }}>
      <center>
      <button type="submit" onClick={bgChange} onDoubleClick={bgBack}>DARK MODE</button>
      </center>
      </div>
      
      </>

    );
  }

export default Fhook;