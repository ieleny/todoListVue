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

      <Table />

  </div>
</template>

<script>
    import Table from '@/components/Table';

    export default 
    {
      name: 'App',
      components: {
        Table
      },
      methods: {
          delete: function (index) {
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
