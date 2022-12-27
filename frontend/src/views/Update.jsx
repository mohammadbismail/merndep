import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormComp from '../components/FormComp'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Update = () => {
  const [product, setProduct] = useState("")
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])

  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id)
      .then((res) => setProduct(res.data))
      .then(() => setLoaded(true))
  })

  const updateProduct = (product) => {
    axios.put(`http://localhost:8000/api/product/${id}`, product)
      .then(() => navigate(`/`))
      .catch(err => {

        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);

      })

  }

  return (
    <div>
      <p><Link to={`/`}>Home</Link></p>
      {loaded && <FormComp initTitle={product.title} initPrice={product.price} initDescription={product.description} onSubmitProp={updateProduct} errors={errors} />}
    </div>
  )
}

export default Update