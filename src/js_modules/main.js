'use strict';


import { commentData } from "./variables";
import { dateConverter } from "./data";
import { timeConverter } from "./time";


const submitButton = document.querySelector('.form__button');
const commentName = document.getElementById('form__name');
const commentText = document.getElementById('form__text');
const commentsBody = document.querySelector('.comments');


let comments = [];


submitButton.addEventListener('click', (event) => {
	event.preventDefault();
	let comment = {
		name : commentName.value,
		text: commentText.value,
		date: commentData.value
	}

	clearInputs();

	comments.push(comment);
	// saveComments();
	showComments(comment);
})

const clearInputs = () => {
	commentName.value = '';
	commentText.value = '';
}

// function saveComments() {
// 	localStorage.setItem('comments', JSON.stringify(comments))
// }

function showComments(comment) {

	commentsBody.innerHTML += `
			<div class="comment">
				<div class="comment__block">
					<div class="comment__name">${comment.name}</div>
					<div class="comment__datatime">
						<div class="comment__data">
							${dateConverter()}
						</div>
						<div class="comment__time">${timeConverter()}</div>
					</div>
				</div>
				<div class="comment__block">
					<div class="comment__text">${comment.text}</div>
				</div>
				<div class="comment__block comment__icons">
					<div id="comment__like" class="comment__like" title="Like"></div>
					<div id="comment__delete" class="comment__delete" title="Delete"></div>
				</div>
			</div>
		`
}
