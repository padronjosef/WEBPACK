import './estilos.css'
import { firstMessage, delayedMessage } from './message.js';
import pruebaImg from './prueba.jpg';

document.write(firstMessage)
delayedMessage();


const img = document.createElement('img');
img.setAttribute('src', pruebaImg)
img.setAttribute('width', 50)
img.setAttribute('hight', 50)
document.body.append(img)
// console.log('Hola mundo!, desde Webpack');
console.log('Hola mundo!, desde Webpack en un webpack.config');