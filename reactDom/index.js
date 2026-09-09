const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red'}},'welcome to react dom');
// const h3=React.createElement('h3',{style:{color:'brown',backgroundColor:'blue'}},'ABES ENGINEERING COLLEGE');
// const img=React.createElement('img',{src:'https://www.bing.com/th/id/OIP.fnCmCPk0m964Ynm7U5Y78gAAAA?w=193&h=266&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2',style:{height:200,width:200}});
// const div=React.createElement('div',{style:{border:'1px solid black',backgroundColor:'yellow',height:'100px'}},h2,h3,img);
// root.render(div);
//resume
const h5 = React.createElement(
    "h5", { style: { color: "black", textAlign: "center" } },
    "Resume",
);
const h4 = React.createElement(
    "h4", { style: { color: "black", textAlign: "center" } },
    "Name: Tanishq",
);
const img = React.createElement("img", {
    src: "https://www.bing.com/th/id/OIP.fnCmCPk0m964Ynm7U5Y78gAAAA?w=193&h=266&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2",
    style: { height: 100, width: 100, alignSelf: "center", marginLeft: "40%" },
});
const h1 = React.createElement(
    "h1", { style: { color: "black", textAlign: "center" } },
    "Abes Engineering College",
);
const h2 = React.createElement(
    "h2", { style: { color: "black", textAlign: "center" } },
    "Department of Computer Science and Engineering",
);
const h3 = React.createElement(
    "h3", { style: { color: "black", textAlign: "center" } },
    "Programming language: JavaScript",
);
const div = React.createElement(
    "div", {
        style: {
            border: "2px solid black",
            backgroundColor: "white",
            height: "400px",
            width: "100%",
        },
    },
    h5,
    h4,
    img,
    h1,
    h2,
    h3,
);
const h21 = < h2 > welcome < /h2>;
root.render(h21);