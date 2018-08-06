import React from 'react'
import withUser from '../higherOrderComponents/withUser'
import { UserAvatar } from './UserAvatar'

export const UserStats = withUser(({ user }) => (
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
))
