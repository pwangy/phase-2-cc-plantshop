import { useState, useEffect } from 'react'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

const PlantPage = () => {
  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState('')
  
  useEffect(() => { // GET plants
    const plantAPI = 'http://localhost:6001/plants/'
    fetch(plantAPI)
      .then(res => {
        if (!res.ok) {
          throw new Error ('Server cannot be reached')
        }
        return res.json()
      })
      .then(plantData => setPlants(plantData))
      // .catch(err => alert(err.message)) //make this an on-screen div
      .catch(err => console.error(err.message))
  }, [])

  const plantsToDisplay = plants.filter (p => (
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  ))

	return (
		<main>
			<NewPlantForm />
      <Search searchValue={searchValue} onSearchChange={setSearchValue} />
			<PlantList plants={plantsToDisplay} />
		</main>
)}

export default PlantPage