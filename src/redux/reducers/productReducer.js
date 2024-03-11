let initialState={
	products:[]
}

function productReducer(state=initialState, action){
	const {type, payload} = action;
	if(type ==='get_products'){
		return {...state, products: payload.data }
	}
	return {...state}
}

export default productReducer;