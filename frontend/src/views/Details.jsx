import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const [product, setProduct] = useState("")
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((res) => setProduct(res.data))
      .then(() => setLoaded(true))

  })
  return (
    <Box>
      <Link to={`/`}>Home</Link>
      {loaded ?

        < TableContainer component={Paper} style={{ maxWidth: 850, margin: '3rem auto' }}>
          <Table size='small' >
            <TableHead>
              <TableRow>
                <TableCell>Title: {product.title}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Price: {product.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description: {product.description}</TableCell>
              </TableRow>
              <TableRow>
                <Button
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  size='large'
                  onClick={() => navigate(`/${id}/edit`)}
                >
                  Edit
                </Button>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        : null
      }
    </Box >
  )
}

export default Details


