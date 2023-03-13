'use strict';

import { commentName } from "./variables";
import { commentText } from "./variables";


const addError = (input, text) => {
	input.classList.add('error');
	input.nextElementSibling.textContent = text;
}

const removeError = (input) => {
	input.classList.remove('error');
	input.nextElementSibling.textContent = '';
}

const checkEmptyInput = (input) => input.value === '';
const checkLengthInput = (input, length) => input.value.length < length && input.value.length !== 0;
const checkOkInput = (input) => /^[0-9a-zA-Z]*$/.test(input.value);



function validateName() {

	if(checkLengthInput(commentName, 5)) return false;
	if(checkEmptyInput(commentName)) return false;
	if(!checkOkInput(commentName)) return false;

	removeError(commentName);
	return true;
}

commentName.addEventListener('blur', () => {

	if(checkLengthInput(commentName, 5)) {
		addError(commentName, 'Введите больше символов!');
	}

	if(checkEmptyInput(commentName)) {
		addError(commentName, 'Заполните поле!');
	}

	if(!checkOkInput(commentName)){
		addError(commentName, 'Допустимы только цифры и буквы!');
	}
})

commentName.addEventListener('focus', () => {
	removeError(commentName)
}) 




function validateText() {

	if(checkLengthInput(commentText, 10)) return false;
	if(checkEmptyInput(commentText)) return false;
	
	removeError(commentText);
	return true;
}

commentText.addEventListener('blur', () => {

	if(checkLengthInput(commentText, 10)) {
		addError(commentText, 'Введите больше символов!');
	}
	
	if(checkEmptyInput(commentText)) {
		addError(commentText, 'Заполните поле!');
	}
})

commentText.addEventListener('focus', () => {
	removeError(commentText)
}) 


export function validate() {

	let validName = validateName();
	let validText = validateText();
	
	if(validName && validText){
		return true;
	}
	return false;
}