<template id="app-button-add">
    <b-row class="row row-addition justify-content-md-center" align="center">
        
        <b-col sm="8">
            <b-form-input type="text" id="newToDo" name="newToDo" v-model="newToDo"></b-form-input>
        </b-col>

        <b-button v-on:click="addition()" >Adicionar</b-button>   
    </b-row>
</template>

<script src="./aditionButton.js" />
<style scoped src="./additionButton.css"></style>