import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import AppRouter from './routers/AppRouter'
import './style.css'
import LogRocket from 'logrocket'

LogRocket.init('alex-lee/grommet-patterns')

ReactDOM.render(<AppRouter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
