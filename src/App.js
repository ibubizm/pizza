import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route} from 'react-router-dom'
import './App.scss';
import Navbar from './navbar/navbar'

import Pizzalist from './pizzalist/pizzalist'
import Basket from './basket/basket'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Pizzalist} />  
      <Route path="/basket" component={Basket} />
    </div>
  );
}



export default App
