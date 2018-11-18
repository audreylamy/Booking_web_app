<template>
  <div class="container__header">
	<img class="container__header--logo" :src="logo" width="10"/>
  </div>
</template>

<script>
import logo from '../assets/logo.png';

export default {
    name: 'Header',

	data() {
		return {
			logo: logo
		};
	}
}
</script>

