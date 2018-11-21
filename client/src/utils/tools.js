
// find all room who are book on this date and hour
function findBookingRoom(allReservation, date, hour) {
	const bookingRoom = [];
	for (var i = 0; i < allReservation.length; i++) {
		if (allReservation[i].date === date && allReservation[i].hour === hour) {
			bookingRoom.push(allReservation[i]);
		}
	}
	return bookingRoom;
}

// find available room by date and hour
function findAvailableRoom(bookingRoom, allRoom) {
	const newRoom = [];
	if (bookingRoom.length === 0) {
		return allRoom;
	}
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

//filter by equipements
function findRoomFilter(allRoom, item) {
	const newRoom = [];
	if (allRoom === null || allRoom === undefined)
		return;
	for (var i = 0; i < allRoom.length; i++) {
		for (var j = 0; j < allRoom[i].equipements.length; j++) {
			if (allRoom[i].equipements[j].name === item) {
				newRoom.push(allRoom[i])
			}
		}
	}
	return newRoom
}

module.exports = {
	findBookingRoom : findBookingRoom,
	findAvailableRoom : findAvailableRoom,
	findRoomFilter : findRoomFilter
}
