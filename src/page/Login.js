import React, {useState}from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { authenticateAction } from './../redux/authenticateAction';

const Login = ({setAuthenticate}) => {
	const [id, setId]= useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const getLogin=(event)=>{
		event.preventDefault();
		console.log('로그인 시작')
		// setAuthenticate(true)
		dispatch(authenticateAction.getLogin(id, password))
		navigate('/')
	}
  return (
	<div className="top">
	<div className="login-container">
	<Container>
		<Form onSubmit={(event)=>getLogin(event)}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control onChange={(e)=>setId(e.target.value)} type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
				We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="danger" type="submit">
				로그인
			</Button>
			</Form>
	</Container>
	</div>
	</div>
  )
}

export default Login