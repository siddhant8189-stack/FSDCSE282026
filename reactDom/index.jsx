const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const h21 = <h2>Welcome to JSX</h2>;
const h22 = <h1>ABES Engineering College</h1>;

const wrapper = (
  <div style={{ border: "2px solid red" }}>
    {h21}
    {h22}
  </div>
);

const div = (
  <div>
    {wrapper}
    <h2>hello</h2>
  </div>
);

root.render(wrapper);