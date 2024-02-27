import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

const PlantPage = () => {
  const[error, setError] = useState('')
  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const plantAPI = 'http://localhost:6001/plants/'
  
  useEffect(() => { // GET plants
    fetch(plantAPI)
      .then(res => {
        if (!res.ok) {
          throw new Error ('Server cannot be reached')
        }
        return res.json()
      })
      .then(plantData => setPlants(plantData))
      // .catch(err => alert(err.message)) //make this an on-screen div
      .catch(error => setError(error.message))
  }, [])

  const plantsToDisplay = plants.filter (p => (
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  ))

  const handleAddPlant = newPlant => {
    setPlants(currentPlants => {
      const lastPlantArray = currentPlants.slice(-1)
      const id = lastPlantArray.length ? Number(lastPlantArray[0] +1) : uuid()
      return [...currentPlants, {...newPlant, id}]
    })
  }

	return (
		<main>
      {error ? <p className="err">{error}</p> : null}
			<NewPlantForm plantAPI={plantAPI} handleAddPlant={handleAddPlant}/>
      <Search searchValue={searchValue} onSearchChange={setSearchValue} />
			<PlantList plants={plantsToDisplay} />
		</main>
)}

export default PlantPage