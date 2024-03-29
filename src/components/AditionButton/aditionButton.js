import { mapActions, mapState } from 'vuex';

export default{
    name:"app-button-add",
    data() { 
        return {
            newToDo: ''
        }
    },
    computed: {
        ...mapState(['tableData'])
    },
    methods: {
        addition(){
            this.tableData.push({
                  id: this.defineId(),
                  title: this.newToDo,
                  selected: false
            });

            this.addTodoList(this.tableData);
            this.newToDo = '';
        },
        defineId(){
            let ultimoId;
            let idAtual;

            if(this.tableData.length <= 0)
            {
                idAtual = 0;
            }else{
                ultimoId = this.tableData.reduce(function(prev,current){
                  return (prev.id > current.id) ? prev : current
                });

                idAtual = ultimoId.id + 1;
            }

            return idAtual;
        },
        ...mapActions(['addTodoList'])
    } 
};