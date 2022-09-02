const html = `<li>
                <div class="d-flex mb-2">
                  <iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/IDf-3ibyHeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div class="container">
                    <span class="yt-title">Música para el Trabajo - Efectividad y Productividad Radio</span> <br>
                    <small class="yt-title yt-subtitle">Chill Music Lab 160 <i class="fas fa-check-circle"></i> usuarios</small> <br>
                    <small class="yt-title yt-subtitle">Maximice su productividad con Music Lab, sea eficiente y trabaje de manera más inteligente, no más difícil. Permítete relajarte y calmar tu mente mientras escuchas estas melodías motivadora...</small>
                  </div>
                </div>
              </li>`

const mostrar_video = () => {
  let video = document.getElementById('video')
  let cantidad = document.getElementById('cantidad').value
  video.innerHTML = ''
  for (let index = 0; index < parseInt(cantidad); index++) {
    video.innerHTML += html
  }                
}

window.addEventListener('load', () => {
  document.getElementById('mostrar').addEventListener('click', e => {
    mostrar_video()
  })
  
  document.getElementById('cantidad').addEventListener('keyup', e => {
    if (e.key == 'Enter') {
      mostrar_video()
    }
  })
  
})