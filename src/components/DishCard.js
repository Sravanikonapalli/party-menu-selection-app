import { useParams } from "react-router-dom";
import { dishes } from "../data/DishesData";
import '../styles/styles.css'
import { useState } from "react";
import IngredientsModal from "./IngredientsModal";
import { IoArrowUndoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function DishCard({addRemoveToggleButton,selected=[]}) {
    const {id}=useParams()
    const dish=dishes.find((d)=>d.id===parseInt(id));

    const [isModalOpen,setIsModalOpen]=useState(false)

    return (
        <>
        <Link to="/" className="back-link"><IoArrowUndoOutline size={50}/></Link>
        <div>   
            <img src={dish.category.image} alt={dish.name} className="dish"/>
            <div>
            <h1>{dish.name}</h1>
            <button onClick={()=>addRemoveToggleButton(dish.id)} className={selected.includes(dish.id)?"remove-btn":"add-btn"}>
                {selected.includes(dish.id)?"Remove":"Add"}
            </button>
            </div>
            <p>{dish.type}</p>
            <p>Dish Type: {dish.dishType}</p>
            <p>{dish.description}</p>
            <button className="ingredients-btn" onClick={()=>setIsModalOpen(true)}>Ingredients</button>

            <IngredientsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                ingredients={dish.ingredients}
            />    
        </div>
        </>
    )

}

export default DishCard;