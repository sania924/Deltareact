import './App.css';
import {Headerh} from './Headerh';
import KgButton from './KgButton';
import ProductTab from './ProductTab';
import { Footer, Footer2 } from './footer';

function Title(){
  return <h2>hello title  component</h2>
}

function App() {

  return (
   <div>
    <Headerh />
    <h1>Hello World</h1>
    <p>This is my first react app</p>
    <Title/>
    <KgButton />
    <ProductTab/>
<Footer />
<Footer2 />
   </div>
  )
}

export default App
