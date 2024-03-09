import React from 'react'
import {useNavigate} from 'react-router-dom'

const Card = ({item}) => {
	const navigate = useNavigate()
	const showDetail=()=>{
		navigate(`product/${item.id}`)
	}
  return (
	<div className="card" onClick={showDetail}>
		<img width="100%" src={item?.img} />
		<div className="description">
			<div className="force-space">{ item?.choice === true ? "Conscious choice": ""}</div>
			<div>{item?.title}</div>
			<div>W{item?.price}</div>
			<div className="force-space">{ item?.new ===true? "신상품": ""}</div>
		</div>
	</div>
  )
}

export default Card
