<template id="app-table">
    <div class="text-center">
        <b-table
            id="tableToDo"
            hover
            striped
            :items="tableData"
            :fields="tableColumns"
        >
            <template slot="selected" slot-scope="row">
                <b-form-group>
                    <input type="checkbox" v-model="row.item.selected"  @change="marcarComoFeito(row.item)" />
                </b-form-group>
            </template>

            <template slot="button" slot-scope="row">
                <b-form-group>
                    <b-button v-on:click="delete(row.item.id)" variant="danger">Delete</b-button>
                </b-form-group>
            </template>

        </b-table>
    </div>
</template>

<script src="./table.js" />