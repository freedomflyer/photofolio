import * as React from 'react'
import * as ReactDom from 'react-dom'
import SwiperComponent from 'swiper-r'
import {App} from './containers/App'
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
    document.getElementById('root')
)
