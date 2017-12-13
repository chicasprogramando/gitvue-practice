<script src="./FormComponent.js"></script>

<template>
    <div>
        <label-component></label-component>
        <textfield-component @input="value=> {textinput=value}"></textfield-component>
        <textdata-component v-bind:textoutput='textoutput'></textdata-component>
        <button-component v-bind:textinput='textinput' @output="value=> {textoutput=value}"></button-component>
        <span></span>
    </div>
</template>
