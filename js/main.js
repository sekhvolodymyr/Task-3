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
  let d = document.getElementById("fan-msg");
      d.innerAdjacentHTML += `<p>${textEl.value}</p><br>`;  
      let dataEl = document.getElementById("msg-data");
  let today = new Date();
  let msgDate = today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  dataEl.innerHTML += msgDate +`<hr><br>`;
      if(textEl.value == ""){
        alert("Please,write some message");
        dataEl.innerHTML ="";
      }
      textEl.value = "";
  });
