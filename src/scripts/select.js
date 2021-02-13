export default class Select {
	constructor(selectElement) {
		this.selectElement = selectElement;
		this.options = getFormattedOptions(selectElement.querySelectorAll('option'))
		this.customElement = document.createElement('div')
		this.labelElement = document.createElement('span')
		this.optionsCustomElement = document.createElement('ul')
		setupCustomElement(this)
		selectElement.after(this.customElement)
	}

	get selectedOption() {
		return this.options.find(option => option.selected)
	}
}

function setupCustomElement(select) {
  select.customElement.classList.add("custom-select-container")

	select.labelElement.classList.add("custom-select-value")

	select.labelElement.innerText = select.selectedOption.label

  select.customElement.append(select.labelElement)

	select.optionsCustomElement.classList.add("custom-select-options")
	select.options.forEach(option => {
		// create elements for my select list
		const optionElement = document.createElement('li')
		optionElement.classList.add('custom-select-option')
		optionElement.classList.toggle('selected', option.selected)
		optionElement.innerText = option.label
		optionElement.dataset.value = option.value
		select.optionsCustomElement.append(optionElement)
	})
  select.customElement.append(select.optionsCustomElement)
}

function getFormattedOptions(options) {
	// convert options to an array with ... so i can use map()
	return [...options].map(opt => {
		return {
			value: opt.value,
			label: opt.label,
			selected: opt.selected,
			element: opt
		}
	})
}