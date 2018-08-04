import React from 'react'
import withUser from '../higherOrderComponents/withUser'

export const UserAvatar = withUser(({ user, size }) => (
	<img
		className={`user-avatar ${size || ''}`}
		alt="user avatar"
		src={user.avatar}
	/>
))
