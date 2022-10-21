import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'

import App from './App'

const body = document.querySelector('#body')
body.className = 'background-dark'

const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(<App />)