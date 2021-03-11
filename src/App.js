
import './App.scss';

import Navbar from './navbar/navbar'
import Sorted from './sorted/sorted'
import SortPoPop from './sorted/sortpopop'
import Pizzalist from './pizzalist/pizzalist'
import pizzas from './pizz/pizzas'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sorting">
      <Sorted items={
        ['grill', 'closed', 'spicy', 'vegan']
      }/>
      <SortPoPop prop={['ass', 'mass', 'pass']}/>
      </div>
      <Pizzalist prop={pizzas} />
    </div>
  );
}

export default App;
