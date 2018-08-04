import React from 'react'
import { UserContext } from '../containers/UserStore'

export default function withUser(Component) {
	return function ConnectedComponent(props) {
		return (
			<UserContext.Consumer>
				{user => <Component {...props} user={user} />}
			</UserContext.Consumer>
		)
	}
}
