const allData = [];

const handleChange = () => {
	const input = document.getElementById('food');
	const inputValue = input.value;
	const isValid = /^[a-zA-Z]{5,10}$/.test(inputValue);

	if (isValid) {
		showToast('Done ', 'greenyellow');
		const data = inputValue;
		allData.push(data);
		updateHistory();
	} else {
		showToast('PLease provide maximum data for this', 'red');
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const myForm = document.getElementById('form');

	myForm.addEventListener('submit', (e) => {
		e.preventDefault();
		handleChange();
	});
});

const updateHistory = () => {
	const box = document.querySelector('.inside-div');
	box.innerHTML = '';
	allData.forEach((item, index) => {
		const entry = document.createElement('div');
		const text = document.createElement('span');

		entry.textContent = `${index + 1}. `;
		text.textContent = item;
		box.appendChild(entry);
		box.appendChild(text);
		text.classList.add('design');
	});
};

const showToast = (text, background) => {
	Toastify({
		text: text,
		duration: 3000,
		destination: 'https://github.com/apvarun/toastify-js',
		newWindow: true,
		close: true,
		gravity: 'top', // `top` or `bottom`
		position: 'center', // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: background,
		},
		onClick: function () {}, // Callback after click
	}).showToast();
};
