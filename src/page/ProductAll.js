import React from 'react'
import { useState, useEffect} from 'react'
import Card from '../component/Card'
import {Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux'

const ProductAll = () => {
	// const [products, setProducts]=useState([])
	const products = useSelector(state => state.product.products)
	const [query, setQuery] = useSearchParams()
	const dispatch = useDispatch()

	const getProducts= ()=>{
		let searchQuery = query.get('q') || ""
		console.log('searchQuery : ', searchQuery )
		dispatch(productAction.getProducts(searchQuery))   //action을 productAction.getProducts실행한 리턴값으로
		
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
