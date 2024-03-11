
function getLogin(id, password){
	return (dispatch, getState)=>{
		dispatch({type:'login', payload:{id, password}})
	};
}

export const authenticateAction={getLogin}