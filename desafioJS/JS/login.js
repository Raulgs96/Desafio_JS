const login = () => {
 

let mail =document.getElementById("mail").value
let pass = document.getElementById("password").value
if (mail && pass){
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  localStorage.setItem("token", token)
  location.reload()
}

}


const salir = () => {
  localStorage.removeItem("token" )
  location.reload()

}

const view = () =>{
  let btnLogout = document.getElementById("btn-logout")
  let btnLogin = document.getElementById("btn-login")
  let btnCreate = document.getElementById("btn-create")
  let token = localStorage.getItem("token")
  if (token ){
    btnLogout.classList.remove("d-none")
    btnLogin.classList.add("d-none")
    btnCreate.classList.add("d-none")
  } else {

  }
}
view()

let loginButton = document.getElementById("btn-create-login")
loginButton.addEventListener("click", login)

let logOutButton = document.getElementById("btn-logout")
logOutButton.addEventListener("click", salir )