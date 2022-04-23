import {CONFIG_GRID_COLS, CONFIG_GRID_LINES} from './constants/config'

export const calcGridSize = (x=CONFIG_GRID_COLS,y=CONFIG_GRID_LINES) => {

    const padding = 10

    const el = document.getElementById('grid-container')
    const elGrid = document.getElementById('grid')
    const w = el.clientWidth
    const h = el.clientHeight

    const propX = w / x
    const propY = h / y

    const proportion = propX>propY ? propY : propX

    const newW = proportion * x
    const newH = proportion * y
    const newF = proportion / 2.5

    elGrid.style.width = Math.floor(newW-(padding*2))+'px'
    elGrid.style.height = Math.floor(newH-(padding*2))+'px'
    elGrid.style.fontSize = Math.floor(newF)+'px'
    
}

export const vhCalc = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
