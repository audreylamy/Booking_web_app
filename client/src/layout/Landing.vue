<template>
  <div class="container">
    <app-header></app-header>
    <app-rooms></app-rooms>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Rooms from '../components/Rooms';

  export default {
    components: {
      'app-header': Header,
      'app-rooms' : Rooms
    }
  }
</script>