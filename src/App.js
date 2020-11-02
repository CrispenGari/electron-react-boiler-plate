import './App.css';
import {Loop} from '@material-ui/icons'
const electron = window.require("electron")
function App() {
    return (
      <div className="app">
          <h1>Electron React BoilerPlate</h1>
              <Loop/>
          <p>Open <i><a href="">App.js</a></i> and start working with Coding.</p>
          <small>By Crispen Gari</small>
      </div>
    )
}
export default App;
