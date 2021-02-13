import './styles/main.scss'
import Select from './scripts/select.js'
// Create a class property without a constructor
const selectElements = document.querySelectorAll('[data-custom]')

selectElements.forEach(selectElement => {
	new Select(selectElement)
})