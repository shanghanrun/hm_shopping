import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Container,Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const ProductDetail = () => {
	const {id} = useParams()
	const [item, setItem] = useState(null)
	const [sizes, setSizes] =useState([])
	const [selectedSize, setSelectedSize]=useState('')
	const getItem =async()=>{
		// let url =`http://localhost:5000/products/${id}`
		let url = `https://my-json-server.typicode.com/shanghanrun/hm_shopping/products/${id}`
		const response = await fetch(url)
		const data = await response.json()
		console.log('item : ', data)
		setItem(data)
		setSizes(data.size)
	}
	useEffect(()=>{
		getItem()
	},[])
	const handleSizeSelect=(size)=>{
		console.log('선택된 사이즈 : ',size )
		setSelectedSize(size)
	}
  return (
	<Container>
	  <Row className="detail-item">
		<Col lg={4}>
			<img src={item?.img} width="100%" alt="상품"/>
		</Col>
		<Col className="detail-info" lg={4}>
			<div id="detail-item-title">{item?.title}</div>
			<div id="detail-item-price">W {item?.price}</div>
			<div id="detail-item-choice">{item?.choice ==true? "Conscious choice": ""}</div>
			<DropdownButton id="size-dropdown" title="사이즈 선택">
				{sizes.map(size =>
					<Dropdown.Item onClick={() => handleSizeSelect(size)} key={size}>{size}</Dropdown.Item>
				)}
			</DropdownButton> 
			<div id="detail-item-selectedSize">선택한 Size : {selectedSize}</div>
			<div id="add">장바구니에 추가</div>
		</Col>
	  </Row>
	</Container>
  )
}

export default ProductDetail
