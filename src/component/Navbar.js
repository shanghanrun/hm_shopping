import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
	<div>
		<div>
			<FontAwesomeIcon icon={faCoffee} />
			<FontAwesomeIcon icon={faMugHot} />
			<FontAwesomeIcon icon={faUser} />
		</div>
		<div>

		</div>
		<div>

		</div>
	</div>
  )
}

export default Navbar
