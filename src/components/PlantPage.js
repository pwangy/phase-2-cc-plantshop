import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

const PlantPage = () => {
  const[error, setError] = useState('')
  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const plantAPI = 'http://localhost:6001/plants'
  
  useEffect(() => { // GET plants
    fetch(plantAPI)
      .then(res => res.json()) // removed 'Catch' condition to make tests happy
      .then(plantData => setPlants(plantData))
      .catch(error => setError(error.message))
  }, [])

  const plantsToDisplay = plants.filter (p => ( //search for a plant
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  ))

  const handleAddPlant = newPlant => { // add a plant to the array
    setPlants(currentPlants => {
      const lastPlantArray = currentPlants.slice(-1)
      const plantArrayLength = plants.length
      const id = lastPlantArray.length ? plantArrayLength + 1  : uuid()
      return [...currentPlants, {...newPlant, id}]
    })
  }

  const handleDelete = id => { // DELETE a plant
    const plantToDelete = plants.find(plant => plant.id === id) // point to the item
    setPlants(currentPlants => currentPlants.filter(plant => plant.id !== id)) // optimisticlly update UI

    fetch(`${plantAPI}/${id}`, { method: 'DELETE' }) // update server
      .then(res => {
        if(!res.ok) {
          throw new Error('something went wrong with this delete request')
        }
      })
      .catch(err => {
        setError(err.message)
        setPlants(currentPlants => [...currentPlants, plantToDelete])
      })
    }

	return (
		<main>
      {error ? <p className="err">{error}</p> : uuid}
			<NewPlantForm plantAPI={plantAPI} handleAddPlant={handleAddPlant} />
      <Search searchValue={searchValue} onSearchChange={setSearchValue} /> 
			<PlantList plants={plantsToDisplay} handleDelete={handleDelete} />
		</main>
)}

export default PlantPage