import React from 'react'
import ReactDOM from 'react-dom'
import UserStore from './containers/UserStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
	<UserStore>
		<App />
	</UserStore>,
	document.getElementById('root')
)
registerServiceWorker()
