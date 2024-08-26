import React from 'react'
import ReactDom from 'react-dom/client';
import { CounterApp} from './CounterApp'


import {App} from './HelloWorldApp'
import { FirstApp } from './FirstApp';

//importar estilo
import './styles.css'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App />
        <FirstApp title='String desde props del main(se esperaba Numero)' /> */}
        <CounterApp value={100} />
        {/* <FirstApp subTitle='Subtitulo definido de antemano'/> */}
    </React.StrictMode>
)