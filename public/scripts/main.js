import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')




// pegar todos os botoes com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  
  button.addEventListener("click" , handelClick)
})


const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {

  button.addEventListener("click" , (event) => handelClick(event, false )) 
})

function handelClick(event, check = true){

  event.preventDefault()

  const slug = check ? "check" : "delete"
  const roomId = document.querySelector("#room-id").dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = check ? "Marcada como lida esta pergunta" : "Excluir esta pergunta"
  modalDescription.innerHTML = check ? "Tem que deseja marcar como lida esta pergunta?" : "Tem certeza que deseja excluir essa pergunta?"
  modalButton.innerHTML = check ? "Sim, marca como lida" : "Sim, exluir pergunta"

  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

  // abrir modal

  modal.open()
}