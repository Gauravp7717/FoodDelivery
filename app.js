import React from "react";
import ReactDOM from "react-dom/client";

const Jsxhead =()=> (<h1 id="heading">namastey from react </h1>);


const Heading = ()=>{
  return<>
  <div id="head">
    <Jsxhead />
    <h1>
      dg gaurav 7717
    </h1>
  </div>
  </>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);