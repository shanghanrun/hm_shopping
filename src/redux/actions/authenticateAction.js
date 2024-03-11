
function getLogin(id, password){
	return (dispatch, getState)=>{
		dispatch({type:'login_success', payload:{id, password}})
	};
}

function loginButtonClick(authenticate){
	return (dispatch, getState)=>{
		dispatch({type:'login_button_click', payload:{authenticate}})
	}
}

export const authenticateAction={getLogin, loginButtonClick}