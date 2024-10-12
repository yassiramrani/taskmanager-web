function validate(){
    let tname=document.getElementById('task').value;
  
    if(tname==""){
        alert("empty task name");

    }
   
    else{
       alert("success");
       open("index.html");
       
    }
}