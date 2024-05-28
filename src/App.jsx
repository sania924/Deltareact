import './App.css';
import KgButton from './KgButton';
import ProductTab from './ProductTab';
function Title(){
  return <h2>hello title  component</h2>
}

function App() {

  return (
   <div>
    <h1>Hello World</h1>
    <p>This is my first react app</p>
    <Title/>
    <KgButton />
    <ProductTab/>
   </div>
  )
}

export default App
