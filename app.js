


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "hii everyone from react"), React.createElement("h2", {}, "hii everyone from react two"),]
  )
);


//   const heading = React.createElement("h1", { id: "heading" }, "hellow from react D");
const rooter = ReactDOM.createRoot(document.getElementById("root"));
rooter.render(parent);

// hii react