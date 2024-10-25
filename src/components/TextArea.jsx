import {useState} from "react";
import Warning from "./Warning";



export default function TextArea({text,setText}) {


  const [warn,setWarn]=useState("");

  
   

const handleChange=(e)=>{
  
  let t=(e.target.value);


  if (t.includes("<script>")){

  setWarn("No scripts are allowed");
  t=t.replace('<script>','');
}
else if(t.includes("@")){

setWarn("No special character are allowed");
t=t.replace('@','');
 
}
else{
  setWarn("");
}

setText(t)
}



  return (
  <div  className="textarea">
  <textarea
      placeholder="Enter your text...."
      value={text}
      onChange={handleChange}
     
      spellCheck="false"
  />
  {warn?<Warning warn={warn}/>:null}

                

      </div>

)}
