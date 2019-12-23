<template>
  <div id="app">

      <!-- Titulo -->
      <h1><b>Lista de Tarefas</b></h1>

      <br>

      <!-- Adicionar -->
      <b-row class="row col-xs-12 col-sm-12 col-md-12 col-lg-12"  align="right">
          <b-col sm="10">
            <b-form-input type="text" id="novoAfazer" name="novoAfazer" v-model="novoAfazer"></b-form-input>
          </b-col>
          <b-button v-on:click="adicionar()" >Adicionar</b-button>   
      </b-row>

      <br>
      <br>

      <!-- TABLE -->
      <div class="text-center">
        
          <b-table
            id="myTabel"
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
                <b-button v-on:click="delet(row.item.id)" variant="danger">Delete</b-button>
              </b-form-group>
            </template>

          </b-table>
      </div>

  </div>
</template>

<script>
    export default 
    {
      name: 'App',
      data: () => 
        ({
              novoAfazer:'',
              tableData: [
                {
                  id: 0,
                  titulo: "Comprar Comida",
                  selected: false,
                  _rowVariant: ""
                },
                {
                  id: 1,
                  titulo: "Fazer Academia",
                  selected: false,
                  _rowVariant:""
                }
              ],
              tableColumns: [
                { key: "selected", label: "", sortable: false },
                { key: "id", label: "ID", sortable: false },
                { key: "titulo", label: "Titulo", sortable: false },
                { key: "button", label: "Ações", sortable: false }
              ]
              
        }),
        methods: {
          delet: function (index) {
              this.tableData.splice(this.tableData.findIndex(x => x.id == index), 1);
          },
          marcarComoFeito: function(data){
              data._rowVariant  = this.getVariant(data.selected);
          },
          adicionar: function(){
              
              let ultimo;
              let id;

              if(this.tableData.length <= 0)
              {
                  id = 0;

              }else{

                  ultimo = this.tableData.reduce(function(prev,current){
                    return (prev.id > current.id) ? prev : current
                  });

                  id = ultimo.id + 1;
              }
              
              this.tableData.push({
                    id: id,
                    titulo: this.novoAfazer,
                    selected: false
              });

          },
          getVariant: function (status) {
            switch (status) {
              case true:
                return 'success'
              case false:
                return ''
            }
          }
        } 
    }
    
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
