const onCreateDestinationSuccess = (responseData) => {
	const destination = responseData.destination;
	console.log(destination);
	const destinationHtml = `
  <div>
        <h4>Place: ${destination.place}<h4/>
        <p>Month Traveled: ${destination.monthTraveled}</p>
        <p>Days Stayed: ${destination.daysStayed}</p>
        <p>Moneyz Spent: ${destination.moneySpent}</p>
        <p>Review: ${destination.review}</p>
        <p>id: ${destination._id}</p>
		</section
  `;

	$('#destinations-display').html(destinationHtml);
	$('form').trigger('reset');
};
const onUpdateDestinationSuccess = () => {
	$('#destinations-display').text('Destination was Updated, click get all to see');
	$('#destinations-display').addClass('text-success');

	setTimeout(() => {
		// remove the message from destinations-display
		$('#destinations-display').html('');
		// remove the color from destinations-display
		$('#destinations-display').removeClass('text-success');
	}, 5000);

	$('form').trigger('reset');
};

const onIndexDestinationsSuccess = (responseData) => {
	const destinations = responseData.destinations;
	console.log(responseData);
	let destinationHtml = '';

	destinations.forEach((destination) => {
		destinationHtml += `
        <div>
         <h4>Place: ${destination.place}<h4/>
        <p>Month Traveled: ${destination.monthTraveled}</p>
        <p>Days Stayed: ${destination.daysStayed}</p>
        <p>Moneyz Spent: ${destination.moneySpent}</p>
        <p>Review: ${destination.review}</p>
        <p>id: ${destination._id}</p>
        <button class="destinations-destroy-dynamic" data-id=${destination._id} id=${destination._id}>Delete Me!</button>
         <form class="destinations-update-dynamic" data-id=${destination._id} action="">
            <input type="text" name="destination[place]" placeholder="Enter Destination">
            <input type="text" name="destination[monthTraveled]" placeholder="Enter Month Traveled">
            <input type="text" name="destination[daysStayed]" placeholder="Enter Days Spent">
            <input type="text" name="destination[moneySpent]" placeholder="Enter Money Spent">
            <input type="text" name="destination[review]" placeholder="Enter Review">
            <button>Update Destination</button>
          </form>
          <hr>
        </div>
      `;
	});

	$('#destinations-display').html(destinationHtml);
};

const onShowDestinationSuccess = function (responseData) {
	const destination = responseData.destination;
	console.log(destination);
	const destinationHtml = `
  <div>
         <h4>Place: ${destination.place}<h4/>
        <p>Month Traveled: ${destination.monthTraveled}</p>
        <p>Days Stayed: ${destination.daysStayed}</p>
        <p>Moneyz Spent: ${destination.moneySpent}</p>
        <p>Review: ${destination.review}</p>
        <p>ID: ${destination._id}</p>
	</div>
  `;

	$('#destinations-display').html(destinationHtml);
	$('form').trigger('reset');
};

const onDeleteDestinationSuccess = function () {
	$('#destinations-display').text('Destination was Deleted');
	$('#destinations-display').addClass('text-success');
	setTimeout(() => {
		$('#destinations-display').html('');
		$('#destinations-display').removeClass('text-success');
	}, 5000);

	$('form').trigger('reset');
};

const onError = (err) => {
	console.log(err);
	$('#error-message').text('Something went wrong please try again ');
	$('#error-message').addClass('text-danger');

	setTimeout(() => {
		// remove the message from error-message
		$('#error-message').html('');
		// remove the color from error-message
		$('#error-message').removeClass('text-danger');
	}, 5000);

	$('form').trigger('reset');
};
module.exports = {
	onCreateDestinationSuccess,
	onIndexDestinationsSuccess,
	onShowDestinationSuccess,
	onDeleteDestinationSuccess,
	onUpdateDestinationSuccess,
	onError
};
