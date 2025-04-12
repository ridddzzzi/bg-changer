import React,{useState} from 'react'

const App = () => {
  const colors = ["Red","Blue","Yellow","Orange","Purple",];
  const [bgcolor,setBgColor] = useState("white");
  return(
    <div style={{backgroundColor: bgcolor, 
      minHeight: "100vh", 
      display:"flex", 
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      
    }}>
      <h1 style={{
        fontFamily:"Arial,sans-serif", color:
        bgcolor === "white" || bgcolor === "Yellow"  ? "black" : "white",
      }}>Background Changer By Riddhi</h1>

      <div style={{
        backgroundColor:"rgba(255,255,255,0.2)",
        padding:"40px",
        borderRadius:"15px", 
        backdropFilter:"blur(10px)",
        border:"1px solid rgba(255,255,255,0.2)",
        boxShadow:"0px 8px 32px rgba(0,0,0,0.1)"
      }}>
        {
          colors.map((color) => (
            <button 
            style={{padding:"12px 24px",
              margin:"10px",
              fontSize:"16px",
              cursor:"pointer",
              borderRadius:"8px",
              border:"none",
              backgroundColor:color,
              fontWeight:"bold",
              color:["Yellow"].includes(color) ? "black" : "white"
            }}
            onClick={()=> setBgColor(color)}> {color} </button>
          ))
        }

      </div>

    </div>
  );
}

export default App