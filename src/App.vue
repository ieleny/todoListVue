<template>
  <div id="app">

      <!-- Titulo -->
      <h1><b>Lista de Tarefas</b></h1>

      <br>

      <AditionButton />
      <Table />

  </div>
</template>

<script>
    import Table from '@/components/Table';
    import AditionButton from '@/components/AditionButton';

    export default 
    {
      name: 'App',
      components: {
        Table,
        AditionButton
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
    margin: 60px 60px 60px;
  }
</style>
