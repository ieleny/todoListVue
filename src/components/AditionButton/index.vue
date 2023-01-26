<template id="app-button-add">
    <b-row class="row col-xs-12 col-sm-12 col-md-12 col-lg-12"  align="right">
        <b-col sm="10">
        <b-form-input type="text" id="novoAfazer" name="novoAfazer" v-model="novoAfazer"></b-form-input>
        </b-col>
        <b-button v-on:click="addition()" >Adicionar</b-button>   
    </b-row>
</template>

<script src="./aditionButton.js" />