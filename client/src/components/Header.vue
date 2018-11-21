<template>
  <div class="container__header">
		<div class="container__header-logo">
			<img class="container__header-logo--img" :src="logo" width="120"/>
		</div>
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

