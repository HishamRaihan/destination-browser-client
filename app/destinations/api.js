// const { ajax } = require('jquery')
const config = require('../config.js');
const store = require('../store.js');

const index = function () {
	return $.ajax({
		url: config.apiUrl + '/destinations',
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		}
	});
};

const show = function (destinationId) {
	return $.ajax({
		url: config.apiUrl + '/destinations/' + destinationId,
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		}
	});
};

const create = function (destinationData) {
	console.log('data: ', destinationData);
	return $.ajax({
		url: config.apiUrl + '/destinations',
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		data: destinationData
	});
};

const destroy = function (id) {
	return $.ajax({
		url: config.apiUrl + '/destinations/' + id,
		method: 'DELETE',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		}
	});
};
const update = function (id, formData) {
	return $.ajax({
		url: config.apiUrl + '/destinations/' + id,
		method: 'PATCH',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		data: formData
	});
};

module.exports = {
	index,
	show,
	create,
	destroy,
	update
};
