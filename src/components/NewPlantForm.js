import { useState } from 'react'
import { object, string, number, boolean } from 'yup'

const initialState = {
  name: '',
  image: '',
  price: '',
  sold: false
}

const plantSchema = object().shape({
  name: string().required('Plant name is required'),
  image: string().required('Image url is required'),
  price: number().positive().required('Price is required'),
  sold: boolean()
})

const NewPlantForm = ({ plantAPI, handleAddPlant }) => {
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState('')

  const handleChange= e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    plantSchema.validate(formData) // validate incoming form data
      .then(validFormData => {
        handleAddPlant(validFormData)
      } )
        fetch(plantAPI, { //contact server
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error ('Could not add new plant; server is not running')
        }
        setFormData(initialState)
      })
      .catch(error => setError(error.text)) //maybe display onscreen
    .catch(validationError => setError(validationError.message))
  }

	return (
		<div className='new-plant-form'>
      {error ? <p className="err">{error}</p> : null}
			<h2>New Plant</h2>
      <form onSubmit={handleSubmit} autoComplete='off'>
				<input type='text' name='name' placeholder='Plant name' value={formData.name} onChange={handleChange} />
				<input type='text' name='image' placeholder='Image URL' value={formData.image} onChange={handleChange} />
				<input type='number' name='price' step='0.01' placeholder='Price' value={formData.price} onChange={handleChange} />
				<button type='submit'>Add Plant</button>
			</form>
		</div>
)}

export default NewPlantForm