import { mapActions, mapState } from 'vuex';

export default 
{
    name: "app-table",
    data() { 
      return {
        tableColumns: [
          { key: "selected", label: "", sortable: false },
          { key: "id", label: "ID", sortable: false },
          { key: "titulo", label: "Titulo", sortable: false },
          { key: "button", label: "Ações", sortable: false }
        ]
      }
    },
    computed: {
        ...mapState(['tableData'])
    },
}