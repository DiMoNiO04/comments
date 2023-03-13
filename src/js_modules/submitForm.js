'use strict';


import { commentData } from "./variables";
import { showComments } from "./showComment";
import { commentName } from "./variables";
import { commentText } from "./variables";
import { form } from "./variables";
import { validate } from "./validationForm";




const clearInputs = () => {
	commentName.value = '';
	commentText.value = '';
}

const getDataForm = () => {
	return {
		name : commentName.value,
		text: commentText.value,
		date: commentData.value
	}
}

form.addEventListener('submit', (event) => {

	event.preventDefault();
	
	if(validate()){
		showComments(getDataForm());
		clearInputs();
	}
})
