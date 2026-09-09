const container = document.getElementById("root");
const root=ReactDom.createRoot(container);
const h21=<h2>Welcome to jsx</h2>
const h22=<h1>ABES Engineering college</h1>
const warpper=<div style={{border:'2px solid red'}}>{h21}{h22}</div>
const div=
<div style={{}}>
    {warpper}
    <h2>hello</h2>
</div>
root.render(warpper);