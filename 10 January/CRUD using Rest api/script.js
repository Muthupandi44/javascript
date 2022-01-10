const tablebody = document.querySelector("tbody");
const url = "https://gorest.co.in/public/v1/users";
 var name = document.getElementById("name");
 var gender = document.getElementById("gender");
 var email = document.getElementById("email");
 var status = document.getElementById("status");

 var list = new Array;

 const gettable = (user)=>{
     if(user.length > 0 ){
         var temp ="";
         user.array.forEach(itemData => {
             temp +="<tr data-id=${itemdata.id}>";
             temp +="<td>" + itemData.name +"</td>";
             temp +="<td>" + itemData.gender +"</td>";
             temp +="<td>" + itemData.email +"</td>";
             temp +="<td>" + itemData.status +"</td>";
             temp +="<td><button type='button' data-action='edit' data-id=' + itemdata.id + '>Edit</button></td>";
             temp += "<td><button type='button' class='btn-danger' data-action='delete' data-id=' + itemdata.id + '>Delete</button></td></tr>";
             
         });
         tablebody.innerHTML=temp;
     }
 }

 
//refresh table
function rendertable(){
    fetch(url,{
        method:"get",
        headers:{
         "Content-Type":"application/json",
         "Authorization":"Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
      }
    })
    .then(res=>{
        res.json()
        .then(data=>{
            console.log("res",data.data);
            list =data.data;
            console.log("res1",list);
            getTable(data.data);
        })
    })
    
}
window.addEventListener("load", (event) => {
    event.preventDefault();
    
   renderTable();

});

//Delete and edit
tablebody.addEventListener("click",function(eve){
    var element = eve.target;
    var action = element.dataset.action;
    var userid = elem.dataset.id;
    if(action === "delete"){
        console.log("delete",userid);



        fetch(`${url}/${userId}` , {
            method:"delete",
            headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
            }
          })
          .then((data) => {
              console.log(data);
              rendertable();
            })
         } 
         var element = eve.target;
         var action = element.dataset.action;
         var userid = elem.dataset.id;
         if(action === "edit"){
            console.log("edit",userid);

            let obj = list.find(userlist => userlist.id == userid);
      console.log("list Array1", obj);
      window.location.href = "update.html?id="+obj.id +"&"+ "name="+obj.name +"&"+ "email="+obj.email +"&"+ "status="+obj.status;
      console.log("list Array" , list)
         }
        });
        function addRedirect(){
            window.location.href = "Adding.html";
          }