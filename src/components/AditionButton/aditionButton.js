import { mapActions, mapState } from 'vuex';

export default{
    name:"app-button-add",
    methods: {
        addition: function(){
/*             let ultimo;
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
            }); */

            console.log(this.addTodoList(['teste']));
        },
        ...mapActions(['addTodoList'])
    } 
};