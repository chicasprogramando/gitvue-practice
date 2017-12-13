<script src="./TextfieldComponent.js"></script>
<template>
    <div>
        <input type="text" v-model="textfieldcontent" v-on:input="updateValue"/>
    </div>
</template>