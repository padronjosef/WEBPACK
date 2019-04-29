import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js';
import pruebaImg from '../images/prueba.jpg';
import videoPrueba from '../videos/que-es-core.mp4'

document.write(firstMessage)
delayedMessage();


const img = document.createElement('img');
img.setAttribute('src', pruebaImg)
img.setAttribute('width', 50)
img.setAttribute('hight', 50)
document.body.append(img)

const video = document.createElement('video');
video.setAttribute('src', videoPrueba)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video)
// console.log('Hola mundo!, desde Webpack');
console.log('Hola mundo!, desde Webpack en un webpack.config');