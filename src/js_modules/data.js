'use strict';

import { commentData } from "./const";
import { TODAY } from "./const";
import { YESTERDAY } from "./const";
import {  errors } from "./const"


let dateNow = new Date();
let dayNow = dateNow.getDate();
let monthNow = dateNow.getMonth() + 1;
let yearNow = dateNow.getFullYear();


const checkSetDefaultMaxDate = (xNow) => (xNow < 10) ? xNow = "0" + xNow : xNow

function setDefaultMaxDate() {

	dayNow = checkSetDefaultMaxDate(dayNow);
	monthNow = checkSetDefaultMaxDate(monthNow);

	let defaultData = yearNow + '-' + monthNow + '-' + dayNow;
	let maxData = defaultData;

	commentData.value = defaultData;
	commentData.max = maxData;
}

setDefaultMaxDate();



const getElementsCommData = () => commentData.value.split('-');
const checkDate = () => commentData.value > commentData.max || commentData.value < commentData.min;

export function dateConverter() {

	let arrCommData = getElementsCommData();

	if(!checkDate()) {
		if(Number(arrCommData[0]) === yearNow && Number(arrCommData[1]) === Number(monthNow) && Number(arrCommData[2]) === Number(dayNow)) {
			return TODAY;
		} else if(Number(arrCommData[0]) === yearNow && Number(arrCommData[1]) === Number(monthNow) && Number(arrCommData[2]) === Number(dayNow) - 1) {
			return YESTERDAY;
		} else{
			return arrCommData[2] + "." + arrCommData[1] + "." + arrCommData[0];
		}
	}
	errors.push('Неправильный формат даты');
}
