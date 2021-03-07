
import './App.scss';

import Navbar from './navbar/navbar'
import Sorted from './sorted/sorted'
import Pizzalist from './pizzalist/pizzalist'
import pizzas from './pizz/pizzas'

// let pizza = {
//   all: [{ass: 'my'}]
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sorted items={
        ['grill', 'closed', 'spicy', 'vegan']
      }/>
      <Pizzalist prop={pizzas} />
    </div>
  );
}

export default App;
