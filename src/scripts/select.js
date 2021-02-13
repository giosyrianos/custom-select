export default class Select {
	constructor(selectElement) {
		this.selectElement = selectElement;
		this.customElement = document.createElement('div')
		this.labelElement = document.createElement('span')
		this.optionsCustomElement = document.createElement('ul')
		setupCustomElement(this)
	}

}

function setupCustomElement(select) {
	select.customElement.classlist.add('custom-select-container');

	select.labelElement.classlist.add('custom-select-value');
	select.customElement.append.(select.labelElement);

	select.optionsCustomElement.classlist.add('custom-select-options');
	select.customElement.append.(select.optionsCustomElement);

}