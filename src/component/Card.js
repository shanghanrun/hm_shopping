import React from 'react'

const Card = ({item}) => {
  return (
	<div className="card">
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
