import Header from './component/headers'
import Navbar from './component/navbar'
import Productos from './component/Productos'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header course="TEL-335" detail="Diseño e Implementación de Apps web y móvil"/>
      <Productos/>
    </div>
  );
}

export default App;
