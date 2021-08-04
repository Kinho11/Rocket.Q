export default function Modal() {  


    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    // const excluirButton = document.querySelector('button.excluir')

    cancelButton.addEventListener("click" , close)
    // excluirButton.addEventListener("click" , close)

    function open() {
      modalWrapper.classList.add("active")
     
    }

    function close() {
      modalWrapper.classList.remove("active")
      // excluirButton.classList.remove('active')
    }

    return{
    open,
    close
  }
}