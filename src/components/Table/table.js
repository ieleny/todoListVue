export default 
{
    name: "app-table",
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
}