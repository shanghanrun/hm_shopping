function getProducts(searchQuery){
	return async(dispatch, getState)=>{
		let url = `https://my-json-server.typicode.com/shanghanrun/hm_shopping/products?q=${searchQuery}`
		let response = await fetch(url)
		let data = await response.json()
		// setProducts(data) 여기서 의미 없음
		console.log('getProducts: ', data)
		dispatch({type:'get_products', payload:{data}})
	};
}

export const productAction ={getProducts}