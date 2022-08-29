import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ImageComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
   
        <ImageComponent src="./image" alt = "immagine"/>
        <ButtonComponent testo ="Click Me" />
    
    </div>
  );
}

export default App;
