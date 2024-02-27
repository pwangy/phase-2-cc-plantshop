import { useState, useEffect } from 'react'

import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'


const PlantPage = () => {
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    const plantAPI = 'http://localhost:6001/plants/'
    fetch(plantAPI)
      .then(res => {
        if (!res.ok) {
          throw new Error ('Server cannot be reached')
        }
        return res.json()
      })
      .then(plantData => setPlants(plantData))
      // .catch(err => alert(err.message))
      .catch(err => console.error(err.message))
  }, [])

	return (
		<main>
			<NewPlantForm />
			<Search />
			<PlantList plants={plants} />
		</main>
)}

export default PlantPage