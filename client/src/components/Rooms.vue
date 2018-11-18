<template>
	<div class="container__body">	
		<div class="search">
			<form>
				<label>Choose a date:</label>
					<input type="date" max="2019-01-31" min="2018-11-20" name="the_date">
				<label>Choose an Hour:</label>
					<select id="pet-select">
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
					<button type="button">Submit</button>
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
						<span class="card__capacity--text">{{ room.capacity }}</span>
					</div>
					<div class="card__equipements" v-for="item in room.equipements" :key="item.name">
						<span class="card__equipements--item">{{ item.name }}</span>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
import roomsJSON from '../../../api/data/rooms.json';

export default {
    name: 'rooms',

	data() {
		return {
			rooms: null
		};
	},

	created() {
			this.rooms = roomsJSON.rooms;
			console.log(this.rooms)
	}
}
</script>