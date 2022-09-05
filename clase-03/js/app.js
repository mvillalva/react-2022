const iframe_1    = '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/IDf-3ibyHeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const title_1     = 'Música para el Trabajo - Efectividad y Productividad Radio'
const subtitle_1  = 'Maximice su productividad con Music Lab, sea eficiente y trabaje de manera más inteligente, no más difícil. Permítete relajarte y calmar tu mente mientras escuchas estas melodías motivadora...'
const extra_1     = 'Chill Music Lab <i class="fas fa-check-circle"></i> 160 usuarios'

const iframe_2    = '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/ndVxD9u95Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const title_2     = 'Ed Sheeran, Martin Garrix, Avicii, Kygo, Dua Lipa, The Chainsmokers Style - Feeling Me'
const subtitle_2  = 'Ed Sheeran, Martin Garrix, Avicii, Kygo, Dua Lipa, The Chainsmokers Style - Feeling Me #Deephouse​ #Chillout​ #Houserelax2021​ #Summermix2021​ #Summermusicmix2021 🔔 Listen on Spotify:...'
const extra_2     = 'Deep Mood <i class="fas fa-check-circle"></i> 1132 usuarios'

const iframe_3    = '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/OKf7dUROnOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const title_3     = 'Relaxing Whiskey Blues Music - Best Of Slow Blues, Rock Ballads Songs - Jazz Blues Music'
const subtitle_3  = '🥃🎸Music is also used for what you say, not just for entertainment, but also for accompanying us while we perform other missions. My passion is writing, and my habit of listening to blues while doing it produces amazing results because of the simple fact that it motivates and ignites the imagination. This playlist features great songs and performers. '
const extra_3     = 'JAZZ & BLUES <i class="fas fa-check-circle"></i> 1458 usuarios'

const iframe_4    = '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/ANF1X42_ae4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const title_4     = 'Curso Git Introducción Vídeo 1'
const subtitle_4  = 'Comenzamos un nuevo curso donde aprenderemos el uso de esta imprescindible herramienta para todo programador. Para más cursos, ejercicios y manuales visita: www.pildorasinformaticas.es'
const extra_4     = 'pildorasinformaticas <i class="fas fa-check-circle"></i> 200 usuarios'

const iframe_5    = '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const title_5     = 'Curso JavaScript: 1. Introducción - #jonmircha'
const subtitle_5  = 'En este video comienzo un nuevo curso de #JavaScript, donde te doy una introducción a la historia y características del lenguaje.'
const extra_5     = 'John Mircha <i class="fas fa-check-circle"></i> 140 usuarios'

const html = `<li>
                <div class="d-flex flex-column flex-md-row mb-2">
                  %iframe%
                  <div class="container-md">
                    <span class="yt-title">%title%</span> <br>
                    <small class="yt-title yt-subtitle">%extra%</small> <br>
                    <small class="yt-title yt-subtitle">%subtitle%</small>
                  </div>
                </div>
              </li>`

const mostrar_videos = () => {
  let video = document.getElementById('video')
  let cantidad = parseInt(document.getElementById('cantidad').value)
  let nro_frame = 1
  video.innerHTML = ''
  
  for (let index = 0; index < cantidad; index++) {
    
    switch (nro_frame) {
      case 1:
        video.innerHTML += html.replace('%iframe%', iframe_1)
                               .replace('%title%', title_1)
                               .replace('%subtitle%', subtitle_1)
                               .replace('%extra%', extra_1)
        break;
      case 2:
        video.innerHTML += html.replace('%iframe%', iframe_2)
                               .replace('%title%', title_2)
                               .replace('%subtitle%', subtitle_2)
                               .replace('%extra%', extra_2)
        break;
      case 3:
        video.innerHTML += html.replace('%iframe%', iframe_3)
                               .replace('%title%', title_3)
                               .replace('%subtitle%', subtitle_3)
                               .replace('%extra%', extra_3)
        break;
      case 4:
        video.innerHTML += html.replace('%iframe%', iframe_4)
                               .replace('%title%', title_4)
                               .replace('%subtitle%', subtitle_4)
                               .replace('%extra%', extra_4)
        break;
      case 5:
        video.innerHTML += html.replace('%iframe%', iframe_5)
                               .replace('%title%', title_5)
                               .replace('%subtitle%', subtitle_5)
                               .replace('%extra%', extra_5)
        break;
    }

    nro_frame ++
    if (nro_frame == 6) nro_frame = 1      
  }                
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mostrar').addEventListener('click', e => {
    mostrar_videos()
  })
  
  document.getElementById('cantidad').addEventListener('keyup', e => {
    if (e.key == 'Enter') {
      mostrar_videos()
    }
  })
  
})