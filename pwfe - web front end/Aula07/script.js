const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'none'
    }
  }
  
  const btn = document.querySelector('.modalBtn')
  btn.addEventListener('click', switchModal)
  
  window.onclick = function(event) {
      const modal = document.querySelector('.modal')
    if (event.target == modal) {
      switchModal()
    }
  }

  const bttn = document.querySelector('.btnn')
  let i=0;
  bttn.addEventListener('click', () => {
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`)
    i++
  })

  bttn.addEventListener('click', () => {
    if(i>0){
      switchModal()
    }
  })
