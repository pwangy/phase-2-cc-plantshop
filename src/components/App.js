import Header from './Header'
import PlantPage from './PlantPage'

const App = () => {
	return (
		<div className='app'>
			<Header />
			<PlantPage />
		</div>
)}

export default App
//! Core Deliverables
// can add a new plant to the page by submitting the form.
// can search for plants by their name and see a filtered list of plants.
// POST /plants
// Required Headers:
// {
//   "Content-Type": "application/json"
// }
// Request Object:
// {
//   "name": "string",
//   "image": "string",
//   "price": number
// }
// Example Response:
// {
//   "id": 1,
//   "name": "Aloe",
//   "image": "./images/aloe.jpg",
//   "price": 15.99
// }

//! Advanced Deliverables
// These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

// You'll have to add additional elements for these features. Feel free to style them however you see fit!

// Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

// User can
// update the price of a plant and still see the updated price after refreshing the page.
// delete a plant and it is still gone when I refresh the page.

// Endpoints for Advanced Deliverables
// PATCH /plants/:id
// Required Headers:
// {
//   "Content-Type": "application/json"
// }
// Request Object:
// {
//   "price": number
// }
// Example Response:
// {
//   "id": 1,
//   "name": "Aloe",
//   "image": "./images/aloe.jpg",
//   "price": 16.99
// }
// DELETE /plants/:id
// Example Response:
// {}