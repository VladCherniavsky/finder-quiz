import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Only export to window - no rendering here
window.App = App;
window.React = React;
window.ReactDOM = ReactDOM;

// Export as ES modules
export { App, React, ReactDOM };
