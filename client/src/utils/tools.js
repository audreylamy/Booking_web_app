function findBookingRoom(allReservation, date, hour) {
	const bookingRoom = [];
	for (var i = 0; i < allReservation.length; i++) {
		if (allReservation[i].date === date && allReservation[i].hour === hour) {
			bookingRoom.push(allReservation[i]);
		}
	}
	return bookingRoom;
}

function findAvailableRoom(bookingRoom, allRoom) {
	const newRoom = [];
	for (var k = 0; k < allRoom.length; k++) {
		let bools = 0;
		for (var j = 0; j < bookingRoom.length; j++) {
			if (allRoom[k].name === bookingRoom[j].roomName) {
				bools++;
				break;
			}
			else if (bools === 0 && j + 1 === bookingRoom.length) {
				newRoom.push(allRoom[k]);
			}
		}
	}
	return newRoom;
}

module.exports = {
	findBookingRoom : findBookingRoom,
	findAvailableRoom : findAvailableRoom
}
