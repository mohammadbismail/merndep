import React from 'react'
import { useEffect } from 'react'
import AllProducts from '../components/AllProducts'
import FormComp from '../components/FormComp'
import axios from 'axios'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
const Dashboard = (props) => {

    const { products, setProducts, loaded, onSubmitProp, onClickProp, errors } = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/")
            .then((res) => setProducts(res.data))

    }, [])
    return (
        <Box display={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Link to={`/view`}>Lists</Link>
            <FormComp initTitle="" initPrice="" initDescription="" onSubmitProp={onSubmitProp} errors={errors} />
            {loaded && <AllProducts products={products} onClickProp={onClickProp} />}
        </Box>
    )
}

export default Dashboard