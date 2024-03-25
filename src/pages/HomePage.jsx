import React, {useState, useEffect} from 'react'
import { fetchProducts } from '../fetchData'
import Layout from '../components/Layout'
import { Box } from '@mui/material'
import ProductList from '../components/ProductList'

function HomePage() {
    const [productData, setProductData] = useState([])
    const [ShoppingCart, setShoppingCart] = useState([])
    useEffect(() => {
        fetchProducts().then(data => setProductData(data))
    }, [])

    function addToCart(product) {
        setShoppingCart([...ShoppingCart, product])
    }
    
  return (
    <Layout>
        <Box sx={{height: '500px'}}>
            <ProductList addToCart={addToCart} products={productData}/>
        </Box>
    </Layout>
  )
}

export default HomePage