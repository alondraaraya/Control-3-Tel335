import Header from './component/headers'
import Navbar from './component/navbar'
import Home from './component/home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header course="TEL-335" detail="Diseño e Implementación de Apps web y móvil"/>
      <Home/>
    </div>
  );
}

export default App;
