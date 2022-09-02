window.addEventListener('load', ()=>{
  let body = document.getElementsByTagName('body')
  setTimeout(()=>{
    body[0].classList.toggle('overflow-hidden')
  }, 600)
  
  let tooltip_icon = document.querySelectorAll('.tooltip-icon')
  let tooltip_data = document.querySelectorAll('.tooltip-data')
  
  tooltip_icon.forEach(element => {        
    element.addEventListener('mouseover', e => {
      if (e.target.parentElement.classList.contains('tooltip-icon')) {
        e.target.parentElement.nextElementSibling.classList.add('tooltip-show')
        e.target.parentElement.nextElementSibling.firstElementChild.classList.add('tooltip-show')
      }
    })
  })

  tooltip_data.forEach(element => {
    element.addEventListener('mouseleave', e => {
      e.currentTarget.parentElement.classList.remove('tooltip-show')
    })
  })

})