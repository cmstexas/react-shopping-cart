import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext'



const Item = props => {
	const scart = useContext(ProductContext)

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => scart.removeItem(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;



// removeItem(id){
// 	const deletedItem = items.indexOf(id)
// 	const deleted = items.splice(deletedItem, 1)
// 	setState()  
//   }