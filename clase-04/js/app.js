class Video {
    constructor(src, width=800, height=600, controls=true, autoplay=false) {
        this.src = src
        this.width = width
        this.height = height
        this.controls = controls
        this.autoplay = autoplay
    }
}

class Audio {
    constructor(src, controls=true, autoplay=false, volumen=100) {
        this.src = src
        this.controls = controls
        this.autoplay = autoplay
        this.volumen = volumen
    }
}

class Button {
    constructor(text, width=50, height=25, color='blue', action=null) {
        this.text = text
        this.width = width
        this.height = height
        this.color = color
        this.action = action
    }

    click() {
        this.action
    }
}

class List {
    constructor(elements, type) {
        this.elements = elements
        this.type = type
    }
}

const limpiarPantalla = () => {
    let view = document.getElementById('view')
    let s_config    = document.querySelectorAll('[data-type=config]')

    view.innerHTML = ''
    view.classList.add('d-none')

    s_config.forEach(e => {        
        e.classList.add('d-none')
    })
}

const mostrar_objeto = e => {
    let view = document.getElementById('view')

    view.innerHTML = JSON.stringify(e)
    view.classList.remove('d-none')
}

let button_video    = document.getElementById('video')
let button_audio    = document.getElementById('audio')
let button_button   = document.getElementById('button')
let button_list     = document.getElementById('list')

let v_create = document.getElementById('v_create')
let a_create = document.getElementById('a_create')
let b_create = document.getElementById('b_create')
let l_create = document.getElementById('l_create')

let a_vol_number = document.getElementById('a_vol_number')
let a_volumen = document.getElementById('a_volumen')

button_video.addEventListener('click', () => {
    limpiarPantalla()
    document.getElementById('s_video').classList.remove('d-none')
})

button_audio.addEventListener('click', () => {
    limpiarPantalla()
    document.getElementById('s_audio').classList.remove('d-none')
})

button_button.addEventListener('click', () => {
    limpiarPantalla()
    document.getElementById('s_button').classList.remove('d-none')
})

button_list.addEventListener('click', () => {
    limpiarPantalla()
    document.getElementById('s_list').classList.remove('d-none')
})

a_volumen.oninput = function() {
    a_vol_number.innerHTML = this.value
}


v_create.addEventListener('click', e => {
    e.preventDefault()
    let v_src       = document.getElementById('v_src').value
    let v_width     = parseInt(document.getElementById('v_width').value)
    let v_height    = parseInt(document.getElementById('v_height').value)
    let v_controls  = document.getElementById('v_controls').checked
    let v_autoplay  = document.getElementById('v_autoplay').checked    

    if(!v_src.trim()) {
        alert('Ingrese el Source')
        return
    }

    let myVideo = new Video(v_src, v_width?v_width:800, v_height?v_height:600, v_controls, v_autoplay)
    
    mostrar_objeto(myVideo)    
})

a_create.addEventListener('click', e => {
    e.preventDefault()
    let a_src       = document.getElementById('a_src').value
    let a_controls  = document.getElementById('a_controls').checked
    let a_autoplay  = document.getElementById('a_autoplay').checked
    
    if(!a_src.trim()) {
        alert('Ingrese el Source')
        return
    }

    let myAudio = new Audio(a_src, a_controls, a_autoplay, a_volumen.value)

    mostrar_objeto(myAudio)
})

b_create.addEventListener('click', e => {
    e.preventDefault()
    let b_text       = document.getElementById('b_text').value
    let b_width     = parseInt(document.getElementById('b_width').value)
    let b_height    = parseInt(document.getElementById('b_height').value)
    let b_color     = document.getElementById('b_color').value
    
    if(!b_text.trim()) {
        alert('Ingrese el texto')
        return
    }

    let myButton = new Button(b_text, b_width?b_width:50, b_height?b_height:25, b_color)
    
    mostrar_objeto(myButton)
})

l_create.addEventListener('click', e => {
    e.preventDefault()
    let l_elements  = document.getElementById('l_elements').value
    let l_type      = document.getElementById('l_type').value
    
    if(!l_elements.trim()) {
        alert('Ingrese la cantidad de elementos')
        return
    }

    let myList = new List(l_elements, l_type)
    
    mostrar_objeto(myList)
})