import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = (props) => {
    const { products, onClickProp } = props
    return (

        <Box>
            <TableContainer component={Paper} style={{ maxWidth: 850, margin: '3rem auto' }}>
                <Table size='small' >
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((prod, id) => {
                            return (
                                <TableRow key={id}>
                                    <TableCell><Link to={`/${prod._id}`}>{prod.title}</Link></TableCell>
                                    <TableCell>{prod.price}</TableCell>
                                    <TableCell>{prod.description}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant='outlined'
                                            color='secondary'
                                            onClick={() => onClickProp(prod._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </TableContainer>
        </Box>

    )
}

export default AllProducts






