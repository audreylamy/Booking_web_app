<template>
    <div v-if="roombook === false" class="rooms">
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
					<button type="button" @click="click(room.name)">Book {{ room.name }}</button>
				</div>
			</div>
		</div>
	</div>
	<div v-else class="rooms">
		<div class="room_card">Thanks, you have booked the room {{ roomBookInfos.name }} at {{ roomBookInfos.hour}} ({{ roomBookInfos.date }}) </div>
	</div>
</template>
<script>

export default {
    props: ['roombook', 'rooms', 'roomBookInfos', 'click'],
}
</script>
