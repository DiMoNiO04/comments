'use strict';

import {commentsBody} from './const';


const likeDislikeComment = (event) => {
	if(event.target.id != 'comment__like'){
		return;
	}
	event.target.classList.toggle('like');
}

commentsBody.addEventListener('click', likeDislikeComment);