'use strict';

export const commentsBody = document.querySelector('.comments');
export const commentData = document.querySelector('.data');

export const TODAY = "сегодня, ";
export const YESTERDAY = "вчера, ";

export let errors = [];

export let date = new Date();

export let hours = date.getHours();
export let minutes = date.getMinutes();
export let dayNow = date.getDate();
export let monthNow = date.getMonth() + 1;
export let yearNow = date.getFullYear();