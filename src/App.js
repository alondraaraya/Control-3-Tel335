import {InfoPanel} from './layout/infoPanel.layout'
import Navbar from './components/navbar'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <InfoPanel />
    </div>
  )
}

export default App;
