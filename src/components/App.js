import Header from './Header'
import PlantPage from './PlantPage'

const App = () => {
	return (
		<div className='app'>
			<Header />
			<PlantPage />
		</div>
)}

//! Advanced Deliverables
// update the price of a plant and still see the updated price after refreshing the page.
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
export default App