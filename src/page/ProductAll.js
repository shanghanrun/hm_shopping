import React from 'react'
import { useState, useEffect} from 'react'
import Card from '../component/Card'
import {Container, Row, Col} from 'react-bootstrap';


const ProductAll = () => {

	const [products, setProducts]=useState([])
	const getProducts= async()=>{
		let url =`http://localhost:5000/products`
		let response = await fetch(url)
		let data = await response.json()
		console.log('products : ', data )
		setProducts(data)
	}
	useEffect(()=>{
		getProducts()
	},[])
  return (
	<div>
	  <Container>
		<Row>
			{products.map((product) =>(
				<Col key={product.id} lg={3}>
					<Card item={product} />
				</Col>
			))}
		</Row>
	  </Container>
	</div>
  )
}

export default ProductAll
