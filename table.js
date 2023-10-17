function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("manu").value;
    var type =document.getElementById("type").value;
  
    var table = document.getElementById("data-table");
    var row = table.insertRow(table.rows.length);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
  var cell3 =row.insertCell(2);
  
    cell1.innerHTML = name;
    cell2.innerHTML = manu;
    cell3.innerHTML =type;
    document.getElementById("name").value = "";
    document.getElementById("manu").value = "";
    document.getElementById("type").value = "";
  }