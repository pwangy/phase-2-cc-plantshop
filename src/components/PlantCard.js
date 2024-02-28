import { useState } from 'react'

const PlantCard = ({ id, name, image, price, handleDelete }) => {
  const [sold, setSold] = useState(false) //defaults to show that all plants are in stock

  const toggleStock = () => {
    setSold(sold => !sold)
  }

  const stockStatus = sold === false ? (<button className='primary' onClick={toggleStock}>In Stock</button>) : (<button onClick={toggleStock}>Out of Stock</button>)

	return (
		<li className='card' data-testid='plant-item'>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>Price: {price}</p>
			<div id='button-row'>
				{stockStatus}
				<button name='delete' label='delete' onClick={() => handleDelete(id)}>x</button>
			</div>
		</li>
)}

export default PlantCard