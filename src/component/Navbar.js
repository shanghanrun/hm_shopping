
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
	const menus=['여성', 'Divided', '남성','신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];
	const navigate = useNavigate()
	const handleLoginClick=()=>{
		if(authenticate ===false){
			navigate('/login')
			// setAuthenticate(prev => !prev)
		}else{
			//로그아웃로직
			navigate('/')
			setAuthenticate(prev => !prev)
		}
	}
	const search =(event)=>{
		if(event.key =='Enter'){
			let keyword = event.target.value;
			console.log('keyword : ',keyword )
			event.target.value ="";//input 비운다.
			//브라우저 url을 바꿔준다.
			navigate(`/?q=${keyword}`)

		}
	}
  return (
	<div>
		<div className="login-btn" onClick={handleLoginClick} >
			<FontAwesomeIcon icon={faUser} />
			<div id="login-btn">{authenticate ==true ? "로그아웃": "로그인"}</div>
		</div>
		<div className="hmlogo">
			<img width={150} src="https://tse4.mm.bing.net/th?id=OIP._RBfiehkYJpMAx03aSy0AQHaE4&pid=Api&P=0&h=220" alt="hmlogo" />
		</div>
		<div className="menu-line">
			<ul className="menus">
				{menus.map(menu =><li key={menu}>{menu}</li>)}
			</ul>
			<div className="search">
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" onKeyPress={(event)=>search(event)} placeholder="제품 검색" />
			</div>

		</div>
	</div>
  )
}

export default Navbar
