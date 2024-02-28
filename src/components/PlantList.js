import PlantCard from './PlantCard'

const PlantList = ({ plants, handleDelete }) => {
  const renderPlants = plants?.map(p => <PlantCard key={p.id} {...p} handleDelete={handleDelete} />)
	return (
		<ul className='cards'>{renderPlants}</ul>
)}

export default PlantList