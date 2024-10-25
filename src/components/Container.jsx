import { FACEBOOK_CHAR, INSTAGRAM_CHAR } from "../lib/constants";
import Stats from "./Stats"
import TextArea from "./TextArea"
import { useState } from "react";


export default function Container() {
  
  const [text,setText]=useState("");


const stata={
  d:text.length, 
  instagram:INSTAGRAM_CHAR-text.length,
  words:text.split(/\s/).filter((word)=>word!=="").length,
  facebook:FACEBOOK_CHAR-text.length,
}

  return (
    <main className="container">
      <TextArea text={text} setText={setText}  />
      <Stats stata={stata} />
    </main>
  )
}
