import React from "react";
import Modal from "react-modal";
import { IoIosArrowBack } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    borderRadius: "12px",
    padding: "20px",
  },
};

Modal.setAppElement("#root"); 

export default function IngredientsModal({ isOpen, onClose, ingredients }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Ingredients Modal"
    >
      <h2><IoIosArrowBack/> Ingredient List</h2>
      <h2>Kadhai Paneer</h2>
      <p>A semi-dry paneer curry with chunks of paneer and capsicum tossed in a 
        spicy, flavorful masala of onion, tomato, ginger, garlic, and freshly 
        ground whole spices. It’s bold, rustic, and served in restaurants as well 
        as homes.</p>
        <h3>Ingredients For Kadhai Masala (roast & grind):</h3>
      <ul>
        <li>2 tbsp coriander seeds</li>
        <li>1 tsp cumin seeds</li>
        <li>2–3 dried red chilies</li>
        <li>5–6 black peppercorns</li>
        <li>2 green cardamoms (optional)</li>
      </ul>
      <h3>Process</h3>
      <p>Dry roast whole spices till fragrant and grind into a coarse aromatic powder</p>
      <button onClick={onClose} className="close-btn">
        Close
      </button>
    </Modal>
  );
}
