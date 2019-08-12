import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = (prod) => {
		const newArr = [];
		cart.forEach(e => {
			if (e.id !== prod.id) {
				newArr.push(e);
		}})
		setCart(newArr);
	}

	return (
		<div className="App">

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem, removeItem }}>
				{/* <Route exact path="/" component={Products} /> */}
				<CartContext.Provider value={{ cart}} >
					<Navigation cart={cart} />
					<Route path="/cart" component={ShoppingCart} />
					<Route path="/" component={Products} />
					/>
				</CartContext.Provider>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
