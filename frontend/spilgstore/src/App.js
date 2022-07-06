import logo from './logo.png';
import './App.css';

import ProductList from './components/ProductList'

const backendURL = 'http://localhost:3001'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <ProductList backendURL = {backendURL}/>
    </div>
  );
}


export default App;
