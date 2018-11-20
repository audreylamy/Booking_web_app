<template>
	<div class="container__body">	
		<div class="search">
			<form @submit.prevent="handleSubmit">
				<label>Choose a date:</label>
					<input type="date" max="2019-01-31" min="2018-11-20" name="date">
				<label>Choose an Hour:</label>
					<select id="pet-select" name="hour">
							<option value="">--Please choose an hour</option>
							<option value="8h-9h">8h-9h</option>
							<option value="9h-10h">9h-10h</option>
							<option value="10h-11h">10h-11h</option>
							<option value="11h-12h">11h-12h</option>
							<option value="12h-13h">12h-13h</option>
							<option value="13h-14h">13h-14h</option>
							<option value="14h-15h">14h-15h</option>
							<option value="15h-16h">15h-16h</option>
							<option value="16h-17h">16h-17h</option>
							<option value="17h-18h">17h-18h</option>
							<option value="18h-19h">18h-19h</option>
							<option value="19h-20h">19h-20h</option>
					</select>
					<button type="submit" value="submit" >Submit</button>
			</form>
		</div>
		<div class="rooms">
			<h4 class="rooms__title">Book your meeting room</h4>
			<div class="rooms__allCard">
				<div class="card" v-for="room in rooms" :key="room.name">
					<div class="card__title">
						<span class="card__title--text">{{ room.name }}</span>
					</div>
					<div class="card__capacity">
						<span class="card__capacity--text">Capacity: {{ room.capacity }}</span>
					</div>
					<div class="card__equipements" v-for="(item, i) in room.equipements" :key="item.name">
						<span class="card__equipements--item">Equipement {{i + 1}}: {{ item.name }}</span>
					</div>
					<div class="card__button">
						<button type="button" v-on:click="book(room.name)">Book {{ room.name }}</button>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import roomsJSON from '../../../api/data/rooms.json';
import axios from 'axios';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'

export default {
    name: 'rooms',

	data() {
		return {
			rooms: null,
			date:  null,
			hour: null
		};
	},

	async created() {
		this.rooms = roomsJSON.rooms;
	},

	methods: {
		book: async function(roomName) {
			console.log(this.date)
			if (this.date && this.hour) {
				// add reservations dans BDD
				const res = await axios.post('http://localhost:3000/books', { "date": this.date, "hour": this.hour, "name": roomName })
				if (res.data) {
					console.log(res.data.message)
					izitoast.success({
						message: res.data.message,
						position: 'topRight'
					});
				}
			} else {
				//izitoast please choose a date and an hour
				izitoast.error({
					message: "Please enter a date and an hour",
					position: 'topRight'
				});
			}
		},

		handleSubmit: async function(submitEvent) {
			const date = submitEvent.target.elements.date.value;
			const hour = submitEvent.target.elements.hour.value;
			if (date && hour) {
				const res = await axios.get('http://localhost:3000/books')
				this.date = date;
				this.hour = hour;
				console.log('date', date)
				console.log('hour', hour)
				console.log(res.data)
				if (res.data.length !== 0) {
					console.log('here')
					const notAvailableRoom = [];
					const allBooking = res.data;
					for (var i = 0; i < allBooking.length; i++) {
						if (allBooking[i].date === date && allBooking[i].hour === hour) {
							notAvailableRoom.push(allBooking[i]);
						}
					}
					console.log(notAvailableRoom)
					console.log(this.rooms)
				} else {
					izitoast.success({
						message: "You can book a room",
						position: 'topRight'
					});
					
					// if (res.data.length != 0) {
					// 	this.booking = res.data
					// } 
					// //verif dans BDD
					// const res = await axios.post('http://localhost:3000/books', {  })
				}
			} else {
				izitoast.error({
						message: "Please enter a date and an hour",
						position: 'topRight'
					});
			}
		}
	}
}
</script>