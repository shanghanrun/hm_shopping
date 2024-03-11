let initialState={
	id:'',
	password: '',
	authenticate: false
}

function authenticateReducer(state=initialState, action){
	const {type, payload} = action;
	if(type ==='login_success'){
		return {...state, id:payload.id, password:payload.password, authenticate: true}
	} else if(type ==='login_button_click'){
		return {...state, authenticate: payload.authenticate}
	}
	return {...state};
}

export default authenticateReducer;