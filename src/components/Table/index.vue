<template id="app-table">
    <div class="text-center">
        <b-table
            id="tableToDoList"
            hover
            striped
            :items="tableData"
            :fields="tableColumns"
        >   

            <template #empty="scope">
                <h4>Não há items na sua lista</h4>
            </template>

            <template v-slot:cell(selected)="row">
                <input type="checkbox" v-model="row.item.selected"  @change="marcarComoFeito(row.item)" />
            </template>

            <template v-slot:cell(actions)="row">
                <b-button type="buton" @click="removingItem(row.item.id)" variant="danger" class="mb-2">Delete</b-button>
            </template>

        </b-table>
    </div>
</template>

<script src="./table.js" />