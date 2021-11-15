import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Planes from './components/Planes/Planes';
import Inspeccion from './components/Inspeccion/Inspeccion';


function App() {
  return (
    <div className="App">
     <Header />
     <Planes />
     <Inspeccion /> 

    </div>
  );
}

export default App;
