import {useState } from 'react';
import {dishes} from '../data/DishesData.js';
import '../styles/styles.css';
import {Link} from 'react-router-dom'
import IngredientsModal from "./IngredientsModal";

function DishesList() {
    const [search,setSearch]=useState("")
    const [selected,setSelected]=useState([])
    const [filter,setFilter]=useState("ALL")
    const [activeDishCategory,setactiveDishCategory]=useState("MAIN COURSE")
    const [isModalOpen,setIsModalOpen]=useState(false)

    const addRemoveToggleButton=(id)=>{
        setSelected((prev)=>
        prev.includes(id)?prev.filter((dish)=>dish!==id):[...prev,id])
    }

    //filter by category/ search/ dishtype
   const filtered = dishes.filter(
    (d) =>
      d.mealType === activeDishCategory &&
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "ALL" || d.type === filter)
    );

    const countDishesByCategory=(category)=>
        selected.filter((id)=>{
            const dish=dishes.find((d)=>d.id===id);
            return dish&& dish.mealType===category;
        }).length
    


    return (
        <div>
            <input 
            type='text'
            placeholder='search dish for your party...'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className='searchbar'
            />
            <div className='category-btns'>
                <button onClick={()=>setFilter("ALL")}
                 className={filter==="ALL"?"active-category":"inactive-category"}>
                    ALL
                </button>
                <button onClick={()=>setFilter("VEG")}
                    className={filter==="VEG"?"active-category":"inactive-category"}>
                    VEG
                </button>
                <button onClick={()=>setFilter("NONVEG")}
                    className={filter==="NONVEG"?"active-category":"inactive-category"}>
                    NON VEG
                </button>
            </div>

            <div className='category-btns'>
                <button onClick={()=>setactiveDishCategory("STARTER")}
                    className={activeDishCategory==="STARTER"?"active-category":"inactive-category"}>
                    Starter ({countDishesByCategory("STARTER")})
                </button>
                <button onClick={()=>setactiveDishCategory("MAIN COURSE")}
                    className={activeDishCategory==="MAIN COURSE"?"active-category":"inactive-category"}>
                    Main Course ({countDishesByCategory("MAIN COURSE")})
                </button>
                <button onClick={()=>setactiveDishCategory("DESSERT")}
                    className={activeDishCategory==="DESSERT"?"active-category":"inactive-category"}>
                    Dessert ({countDishesByCategory("DESSERT")})
                </button>
                <button onClick={()=>setactiveDishCategory("SLIDES")}
                    className={activeDishCategory==="SLIDES"?"active-category":"inactive-category"}>
                    Slides ({countDishesByCategory("SLIDES")})
                </button>
            </div>

            <div className='dishes-container'>
                {filtered.length===0 ? ( 
                    <p>No Dishes found</p>
                ) :(
                    filtered.map((item)=>(
                        <div key={item.id}>
                            <div className='dish-item'>
                            <div>
                            <h1>{item.name}</h1>
                            <p>{item.description.slice(0,30)} ...
                                <span>
                                    <Link to={`/dishcard/${item.id}`}> Read more</Link>
                                </span>
                            </p>
                            <button className="ingredients-btn" onClick={()=>setIsModalOpen(true)}>Ingredients</button>
                             <IngredientsModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                ingredients={item.ingredients}
                            /> 
                            </div>
                            <div className='dishing-and-button'>
                            <img src={item.category.image} alt={item.name}/>
                            <button onClick={()=>addRemoveToggleButton(item.id)} className={selected.includes(item.id)?"remove-btn":"add-btn"}>
                                {selected.includes(item.id)?"Remove":"Add"}
                            </button>    
                            </div>
                            </div>
                            <hr/>

                        </div>
                        
                    ))
                )}
            
            </div>
            <div className='bottom-section'>
            <p className='total-dishes-count'>Total Dishes Selected: {selected.length}</p>
            <button className='continue-btn'>Continue</button>
            </div>
        </div>
        
    )
}

export default DishesList;