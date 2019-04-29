import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import pruebaImg from '../images/prueba.png'
import data from './teachers.json'
import renderToDom from './render-to-dom.js'

import React from 'react'
import { render } from 'react-dom'
import Teachers from './components/teachers.js'
import '../css/main.less'

render(<Teachers data={data}/>, document.getElementById('container'))

console.log(data)

data.teachers.forEach(teacher => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDom(element)
})

document.write(firstMessage)
delayedMessage();


const img = document.createElement('img');
img.setAttribute('src', pruebaImg)
img.setAttribute('width', 50)
img.setAttribute('hight', 50)
document.body.append(img)
// console.log('Hola mundo!, desde Webpack');
console.log('Hola mundo!, desde Webpack en un webpack.config');