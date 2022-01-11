const tablebody = document.querySelector("#table-body");
const url = "https://gorest.co.in/public/v1/users";

var Name = document.getElementById("name");
var Gender = document.getElementById("gender");
var Email = document.getElementById("email");
var Status = document.getElementById("status");

var list = new Array;

const getTable = (users) => {
    if(users.length > 0){
      var temp ="";
      users.forEach(itemData => {
             temp += "<tr data-id=${itemData.id}>";
             temp += "<td>" + itemData.name + "</td>";
             temp += "<td>" + itemData.gender + "</td>";
             temp += "<td>" + itemData.email + "</td>";
             temp += "<td>" + itemData.status + "</td>";
             temp += "<td><button type='button' class='btn btn-outline-success btn-sm' data-action='edit'  data-id='" + itemData.id + "'>Edit</button><button type='button' class='btn btn-outline-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Delete</button></td>";
             
          });
          tablebody.innerHTML = temp;
        }
 
     }
 

     function renderTable() {
        fetch(url , {
        method:"GET",
        headers:{
         "Content-Type":"application/json",
        "Authorization":"Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
        }
      })
      .then(res => {
        res.json()
        .then(data => {
               list = data.data;
                console.log("response1",list);
                getTable(data.data);
        })
      })
    }

    window.addEventListener("load", (event) => {
        event.preventDefault();  
       renderTable();
  });

  tablebody.addEventListener("click", function(evt){
  
    
     var elem = evt.target;
    var action = elem.dataset.action;
    var userId = elem.dataset.id;
    if (action === "delete") {
      console.log("delete", userId);
  
        fetch(`${url}/${userId}` , {
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
        }
      })
      .then((data) => {
          console.log(data);
          renderTable();
        })
     } 
     
    var elem = evt.target;
    var action = elem.dataset.action;
    var userId = elem.dataset.id;
    if (action === "edit"){
       console.log("edit", userId);
        
     let obj = list.find(userslist => userslist.id == userId);
        console.log("list Array1", obj);
  
          window.location.href ="update.html?id="+obj.id +"&"+ "name="+obj.name +"&"+ "email="+obj.email +"&"+ "status="+obj.status;
       console.log("list Array" , list)    
    }
  });
  
  function addRedirect(){
    window.location.href = "add.html";
  }