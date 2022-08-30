window.addEventListener('load', ()=>{
  let body = document.getElementsByTagName('body')
  setTimeout(()=>{
    body[0].classList.toggle('overflow-hidden')
  }, 600)
})