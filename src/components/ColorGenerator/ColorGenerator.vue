
<script src="./ColorGenerator.js"></script>

<template>
  <div>
  <ButtonRandomColor @generateColor="val=>{color=val}"></ButtonRandomColor>
  <ColorSquare :color="color" ></ColorSquare>
  </div>
</template>

<style scoped>

</style>
