import React from 'react'
import {Button} from 'react-bootstrap'

const Login = () => {
  return (
	<div className="login-container">
		<div className="login">
		<div className="log-input">
			<div className="id">
				<span>아이디</span>
				<input type="text" placeholder="아이디" />	
			</div>
			<div className="password">
				<span>비밀번호</span><input type="password" placeholder="비밀번호" />
			</div>
		</div>
		<div className="log-button">
			<Button variant="primary">로그인</Button>
		</div>
		</div>
	</div>
  )
}

export default Login