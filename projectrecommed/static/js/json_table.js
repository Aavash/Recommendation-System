window.onload= function () {
var a=window.location.href
var endpoint= a.split('/json-table/').join('/api/recommend/')


    $(document).ready( function () {
//    var datatable = $('#json-table').DataTable();


   $.ajax({
     method: "GET",
     url:  endpoint ,
     dataType: 'json',
     success: function(data){
     column = data.keys
     row = data.values

     createTable(column, row)


     }
   })



} );
}


function createTable(column, row){

	var inner_container = document.createElement("div"), th, td;
	var head = document.createElement("thead");
    var th = document.createElement("tr");
    for (var i = 0; i < column.length; i++) {
        header_tag = document.createElement("th");
                text = document.createTextNode(column[i]);
                header_tag.appendChild(text);
                th.appendChild(header_tag);
    }
    inner_container.appendChild(th);
    inner_container.appendChild(head);

    document.getElementById("json-table").appendChild( inner_container );


    for (var j = 0; j < row.length; j++) {
                tr = document.createElement("tr");
        for (var i = 0; i < row[j].length; i++) {
            data_tag = document.createElement("td");
                text = document.createTextNode(row[j][i]);
                data_tag.appendChild(text);
                tr.appendChild(data_tag);
        inner_container.appendChild(tr);
    }
}
 document.getElementById("json-table").appendChild( inner_container );


}