import './styles/main.scss'
// Create a class property without a constructor
class Game {
  name = 'Street Basketball'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`
console.log('works')
// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Images
import example from './img/example.png'
// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root')
app.append(heading, p)