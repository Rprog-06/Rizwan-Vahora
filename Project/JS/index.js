
let save = document.querySelector(".rst");
let popRegistration = document.querySelector(".rstv");
let savebtn = document.querySelector("#save")


let fullName = document.querySelector(".name");
let desc = document.querySelector(".desc");
let prio = document.querySelector(".prio");

// is userLogin



save.addEventListener("click", () => {
  popRegistration.classList.remove("d-none");
});




savebtn.addEventListener("click", () =>{ 
  let newUser = {
    fullName: fullName.value,
    desc: desc.value,
    prio: prio.value
  }  
   
  let userList=[]

  userList.push(newUser);
  localStorage.setItem("users", JSON.stringify(userList));
  popRegistration.classList.add("d-none");
});

 
 

  
 

 