const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onIndexDestinations = (event) => {
	event.preventDefault();
	console.log('all destinations coming right up!');
	api.index().then(ui.onIndexDestinationsSuccess).catch(ui.onError);
};

const onShowDestination = (event) => {
	event.preventDefault();
	console.log('onShowDestination ran!');
	const data = getFormFields(event.target);
	const destinationId = data.destination.id;
	console.log(data);
	api.show(destinationId).then(ui.onShowDestinationSuccess).catch(ui.onError);
};

const onCreateDestination = (event) => {
	event.preventDefault();
	console.log('Destination was Created');
	const data = getFormFields(event.target);
	api.create(data).then(ui.onCreateDestinationSuccess).catch(ui.onError);
};

const onDestroyDestination = (event) => {
	event.preventDefault();
	console.log('On Delete Worked');
	const data = getFormFields(event.target);
	const destinationId = data.destination.id;
	api.destroy(destinationId).then(ui.onDeleteDestinationSuccess).catch(ui.onError);
};

const onDynamicDestroyDestination = (event) => {
	const id = $(event.target).data('id');
	console.log(id);
	api.destroy(id).then(ui.onDeleteDestinationSuccess).catch(ui.onError);
};

const onDynamicUpdateDestination = (event) => {
	event.preventDefault();
	const data = getFormFields(event.target);
	console.log(data);
	const destinationId = $(event.target).data('id');
	api.update(destinationId, data).then(ui.onUpdateDestinationSuccess).catch(ui.onError);
};

module.exports = {
	onIndexDestinations,
	onShowDestination,
	onCreateDestination,
	onDestroyDestination,
	onDynamicDestroyDestination,
	onDynamicUpdateDestination
};
