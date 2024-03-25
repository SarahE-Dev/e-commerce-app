import { ShoppingBag } from '@mui/icons-material'
import { Box, Card, CardHeader, Typography, CardMedia, CardContent, Button } from '@mui/material'
import React from 'react'

export default function ProductList({products, addToCart}) {
  return (
    <Box>
        {products.map((product)=>(
            
                <Card sx={{maxWidth: 300}}>
                    <CardHeader action={
                        <Box>
                            <Typography color='secondary' fontWeight='bold'>${product.price}</Typography>
                        </Box>
                    } title={product.title} subheader={product.brand}/>
                    <CardMedia component='img' height='194' image={product.image} alt={product.title}/>
    <CardContent>
        <Typography variant='body2' color='text.secondary'>{product.description}</Typography>
    </CardContent>
    <Box sx={{display: 'flex', justifyContent: 'center', pb: 2}}>
        <Button variant='text' color='primary' onClick={()=>addToCart(product)}>Add to Cart</Button>
    </Box>
                </Card>
            
        ))}
    </Box>
  )
}
