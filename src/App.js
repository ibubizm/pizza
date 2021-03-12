import {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import './App.scss';
import Navbar from './navbar/navbar'
import Sorted from './sorted/sorted'
import SortPoPop from './sorted/sortpopop'
import Pizzalist from './pizzalist/pizzalist'
// import pizzas from './pizz/pizzas'


function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pizzas.json').then(resp => resp.json()).then(json => {
      setPizzas(json.pizzas)
    })
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <div className="sorting">
      <Sorted items={
        ['grill', 'closed', 'spicy', 'vegan']
      }/>
      <SortPoPop prop={['ass', 'mass', 'pass']}/>
      </div>
      
        <Route path="/" exect render={() => <Pizzalist prop={pizzas} />} />
        {/* <Pizzalist key={pizzas.id} prop={pizzas.map(item => item)}/> */}
        
    </div>
  );
}

export default App;
