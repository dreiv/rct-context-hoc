import React from 'react'
import { Content } from './Content'
import { Sidebar } from './Sidebar'

export const Body = () => (
	<div className="body">
		<Sidebar />
		<Content />
	</div>
)
