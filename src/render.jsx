import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Only handle rendering here
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  
        dataFromSF='Hello from SF!'
        onFinishQuiz={(ids) => {
          console.log('ids', ids)
        }}
        onCheckCallbackClick={() => {console.log('Hello')}}
        onCheckCallbackWithDataReturn={() => {
            return 'Some data'
        }} />
  </React.StrictMode>
) 