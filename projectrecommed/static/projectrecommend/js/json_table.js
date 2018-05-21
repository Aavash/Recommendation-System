window.onload= function () {
console.log('good')

    $(document).ready( function () {
    var endpoint = "{% url 'recommend-api'%}";
    var datatable = $('#myTable').DataTable();

    $.ajax({
              method: 'GET',
                url: endpoint,
                success: function(data){
                console.log(data)
                datatable.Columns.Add("CustLName", typeof(String));

                },
                error: function(error_data){
                    console.log("error");
                    datatable.Columns.Add("CustLName", typeof(String));

                }

            })



} );
}




