import React from 'react'
import { UserContext } from '../containers/UserStore'
import { UserAvatar } from './UserAvatar'

export const UserStats = () => (
	<UserContext.Consumer>
		{user => (
			<div className="user-stats">
				<div>
					<UserAvatar user={user} />
					{user.name}
				</div>
				<div className="stats">
					<div>{user.followers} Followers</div>
					<div>Following {user.following}</div>
				</div>
			</div>
		)}
	</UserContext.Consumer>
)
