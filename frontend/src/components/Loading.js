import React from "react";
import neindanke from "../static/img/neindanke.svg"
import bg from "../static/img/neinbg.webp"
import smug from "../static/img/smug.webp"
const Loading = () =>{
    const spin = {
        animation : 'spin 2s infinite',
    }
return (
<div className="flex flex-row justify-center center-items">
<div className="flex flex-col justify-center center-items">

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">   



<circle cx="100" cy="100" r="50" fill="red" />
  <image href={bg} x="0" y="0" width="200" height="200" />
  <image href={smug} x="50" y="50" width="100" height="100" className="spin"/>
</svg>
</div>
</div>
)
}
export default Loading;