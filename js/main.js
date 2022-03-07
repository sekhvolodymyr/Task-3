function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


  
  document.getElementById("myBtn").addEventListener("click", function() {
  let textEl = document.getElementById("my-txt");
  let d = document.getElementById("block-msg");
  let dataEl = document.getElementById("block-msg");
  let today = new Date();
  let msgDate = today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear();

      d.innerHTML += `<div class ="text-fans">${textEl.value}</div><br>`;  
      dataEl.innerHTML += `<div class = "date-msg">${msgDate}</div><br>`;
    
      if(textEl.value == ""){
        alert("Please,write some message");
        dataEl.innerHTML ="";
      }
      textEl.value = "";
  });
