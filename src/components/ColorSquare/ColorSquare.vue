<script src="./ColorSquare.js"></script>

<template>
  <div class="square" v-bind:style="{backgroundColor:color}"></div>
</template>

<style scoped>
  .square{
    height: 200px;
    width: 200px;
  }
</style>
