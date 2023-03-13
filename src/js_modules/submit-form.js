'use strict';


import { commentData } from "./variables";
import { showComments } from "./showComment";
import { submitButton } from "./variables";
import { commentName } from "./variables";
import { commentText } from "./variables";


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

submitButton.addEventListener('click', () => {
	showComments(getDataForm());
	clearInputs();
})
