import { mapActions, mapState } from 'vuex';

export default 
{
    name: "app-table",
    data() { 
      return {
        tableColumns: [
          { key: "selected", label: "", sortable: false },
          { key: "id", label: "ID", sortable: false },
          { key: "title", label: "Titulo", sortable: false },
          { key: "actions", label: "Ações", sortable: false }
        ]
      }
    },
    computed: {
      ...mapState(['tableData'])
    },
    methods: {
      removingItem(index) {
        this.removingItem(index);
      },
      marcarComoFeito: function(data){
        data._rowVariant  = this.getVariant(data.selected);
      },
      getVariant: function (status) {
        switch (status) {
          case true:
            return 'success'
          case false:
            return ''
        }
      },
      ...mapActions(['removingItem'])
    }
}