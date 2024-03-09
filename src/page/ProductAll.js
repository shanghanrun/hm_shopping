import React from 'react'
import { useState, useEffect} from 'react'
import Card from '../component/Card'
import {Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
	const [products, setProducts]=useState([])
	const [query, setQuery] = useSearchParams()
	const getProducts= async()=>{
		let searchQuery = query.get('q') || ""
		console.log('searchQuery : ', searchQuery )
		let url =`http://localhost:5000/products?q=${searchQuery}`
		let response = await fetch(url)
		let data = await response.json()
		console.log('products : ', data )
		setProducts(data)
	}
	useEffect(()=>{
		getProducts()
	},[query])
  return (
	<div>
	  <Container>
		<Row>
			{products.map((product) =>(
				<Col key={product.id} lg={3} >
					<Card item={product} />
				</Col>
			))}
		</Row>
	  </Container>
	</div>
  )
}

export default ProductAll
