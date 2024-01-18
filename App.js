/**<div id = "parent">
    <div id = "child">
        <h1> I am Nikky</h1>
        <h2> I a nikky2</h2>
    </div>
 </div>
 */


const parent= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{}, "I am React Nikky"),
        React.createElement("h2",{}, "I am React Nikky2")
])
 
);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);