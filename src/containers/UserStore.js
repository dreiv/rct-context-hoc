import React, { Component } from 'react'

export const UserContext = React.createContext()

export default class UserStore extends Component {
	state = {
		user: {
			avatar:
				'https://www.gravatar.com/avatar/7672261031106e6ee0ac7823f0828b4e',
			name: 'Drei',
			followers: 1234,
			following: 123,
		},
	}

	render() {
		return (
			<UserContext.Provider value={this.state.user}>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}
