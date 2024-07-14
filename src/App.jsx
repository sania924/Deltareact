import "./App.css";
// import Container from "./Container";
// import { Headerh } from "./Headerh";
// import KgButton from "./KgButton";
// import ProductTab from "./ProductTab";
// import { Footer, Footer2 } from "./footer";
import Ludoboard from "./ludogame/Ludoboard";
import Todolist from "./todolist/Todolist";
function Title() {
  return <h2>hello title component</h2>;
}

function App() {
  return (
    <div>
      {/* <Headerh />
      <h1>Hello World</h1>
      <p>This is my first react app</p>
      <Title />
      <KgButton />
      <ProductTab />
      <Footer />
      <Footer2 />
      <Container>
        <h1>hello contisner</h1>
        <p>this is container paragraph</p>
      </Container> */}
      {/* <Ludoboard /> */}
      {/* <Todolist /> */}
      <Ludoboard></Ludoboard>
    </div>
  );
}

export default App;
