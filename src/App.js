import './App.css';
import DishesList from './components/DishesList';
import DishCard from './components/DishCard';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [selected,setSelected]=useState([])

  const addRemoveToggleButton=(id)=>{
          setSelected((prev)=>
          prev.includes(id)?prev.filter((dish)=>dish!==id):[...prev,id])
  }
    
    return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DishesList selected={selected} addRemoveToggleButton={addRemoveToggleButton}/>}/>
        <Route path="/dishcard/:id" element={<DishCard selected={selected} addRemoveToggleButton={addRemoveToggleButton} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
