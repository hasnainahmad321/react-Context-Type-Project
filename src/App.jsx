import Cart from './components/Cart'
import Item from './components/Item'
import './App.css'

function App() {
  

  return (
    <div className='App'>
      <Item name="MacBook pro " price={1000}/>
      <Item name="Mobile " price={2000}/>
      <Item name="Watch " price={3000}/>
      <Cart/>

     
    </div>
  )
}

export default App0
