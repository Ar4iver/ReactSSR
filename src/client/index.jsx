import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.tsx'

window.addEventListener('load', () => {
    const container = document.getElementById('root');
    ReactDOM.hydrateRoot(container, <App />);
});

