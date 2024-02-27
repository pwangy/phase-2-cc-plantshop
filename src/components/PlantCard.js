import { useState } from 'react'

const PlantCard = ({ id, name, image, price }) => {
  const [sold, setSold] = useState(false) //defaults to show all plants in stock

  const toggleStock = () => {
    setSold(sold => !sold)
  }

	return (
		<li className='card' data-testid='plant-item' id={id}>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>Price: {price}</p>
			{sold === false 
      ? (<button className='primary' onClick={toggleStock}>In Stock</button>) 
      : (<button onClick={toggleStock}>Out of Stock</button>)}
		</li>
)}

export default PlantCard