import PlantCard from './PlantCard'

const PlantList = ({ plants }) => {
  const renderPlants = plants?.map(p => <PlantCard key={p.id} {...p} />)
	return (
		<ul className='cards'>{renderPlants}</ul>
)}

export default PlantList