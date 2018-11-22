<template>
	<div class="container__body">
		<div class="search">
			<div class="search--bydate">
				<form @submit.prevent="handleSubmit">
					<label class="label">Choose a date: </label>
						<input id="myDate" type="date" max="2019-01-31" min="2018-11-20" name="date"><br><br />
					<label class="label">Choose an Hour: </label>
						<select id="pet-select" name="hour">
							<option value="">Please choose an hour</option>
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
						</select> <br><br />
						<button class="button" type="submit" value="submit">Check availability</button>
				</form>
			</div>
			<div v-if="this.submit && this.date && this.hour" class="search--filter">
				<p class="label">Choose your equipement:</p>
					<div>
						<input 
							type="checkbox" 
							name="tv"
							value="TV"
							v-model="checkedEquipement"
							checked="this.state.selected"
							@click="filter"
							>
						<label for="scales">TV</label>
					</div>
					<div>
						<input 
							type="checkbox" 
							name="retro" 
							value="Retro Projecteur"
							v-model="checkedEquipement"
							checked="item.state.selected"
							@click="filter"
						>
						<label for="Retro">Retro projecteur</label>
					</div>
			</div>
		</div>
		<DisplayRooms 
			:roombook="roomBook"
			:rooms="rooms"
			:roomBookInfos="roomBookInfos"
			:click="book"
		></DisplayRooms>
  </div>
</template>

<script>
import roomsJSON from '../../../rooms.json';
import axios from 'axios';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import tools from '../utils/tools';
import DisplayRooms from './DisplayRooms.vue';

export default {
	name: 'rooms',

	 components: {
		DisplayRooms
  	},

	data() {
		return {
			rooms: null,
			roomsDate: null,
			roomBook: false,
			roomBookInfos: null,
			submit: false,
			date:  null,
			hour: null,
			checkedEquipement: []
		};
	},

	mounted() {
		const newdate = new Date().toISOString().split("T")[0];
		document.getElementById('myDate').setAttribute("min", newdate);
	},

	created() {
		this.rooms = roomsJSON.rooms;
	},

	methods: {

		filter: function(e) {
			if (this.checkedEquipement.includes(e.target.value)) {
				// delete equipement
				console.log(this.roomsDate)
				if (this.roomsDate === undefined || this.roomsDate === null) {
					// if no room is booked inside BDD
					if (this.checkedEquipement.length === 1) {
						this.rooms = roomsJSON.rooms;
					} else {
						const item = this.checkedEquipement.filter(item => item !== e.target.value)
						const newRoom = tools.findRoomFilter(roomsJSON.rooms, item[0])
						this.rooms = newRoom;
					}	
				} else {
					// if at least one room is booked inside BDD
					if (this.checkedEquipement.length === 1) {
						this.rooms = this.roomsDate;
					} else {
						const item = this.checkedEquipement.filter(item => item !== e.target.value)
						const newRoom = tools.findRoomFilter(this.roomsDate, item[0])
						this.rooms = newRoom;
					}		
				} 
			} else {
				// select by equipement
				const newRoom = tools.findRoomFilter(this.rooms, e.target.value)
				if (!this.checkedEquipement.includes(e.target.value)) {
					this.checkedEquipement.push(e.target.value)
				}
				this.rooms = newRoom
			}	
		},

		book: async function(roomName) {
			if (this.date && this.hour) {
				// add reservations inside BDD
				const res = await axios.post('http://localhost:3000/api/books', { "date": this.date, "hour": this.hour, "name": roomName })
				if (res.data) {
					this.roomBook = true
					this.roomBookInfos = { name: roomName, date: this.date, hour: this.hour }
				}
			} else {
				izitoast.error({
					message: "Please enter a date and an hour",
					position: 'topRight'
				});
			}
		},
		

		handleSubmit: async function(submitEvent) {
			this.checkedEquipement = []
			this.roomBook = false;
			this.submit = true;
			const date = submitEvent.target.elements.date.value;
			const hour = submitEvent.target.elements.hour.value;

			if (date && hour) {
				const res = await axios.get('http://localhost:3000/api/books')
				this.date = date;
				this.hour = hour;
				this.rooms = roomsJSON.rooms;
				if (res.data.length !== 0) {
					const allReservation = res.data;
					// find all rooms which are booked on this date and hour
					const bookingRoom = tools.findBookingRoom(allReservation, date, hour)
					// find available room 
					const newRoom = tools.findAvailableRoom(bookingRoom, this.rooms)
					if (newRoom.length === 0) {
						this.rooms = null
						this.roomsDate = null
						this.roomBook = null
					}
					else if (newRoom.length > 0) {
						this.rooms = newRoom
						this.roomsDate = newRoom
						izitoast.success({
							message: "You can book a room",
							position: 'topRight'
						});
					}
					else {
						this.rooms = roomsJSON.rooms
						this.roomsDate = roomsJSON.rooms
						izitoast.success({
							message: "You can book a room",
							position: 'topRight'
						});
					}
					
				} else {
					izitoast.success({
						message: "You can book a room",
						position: 'topRight'
					});
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
