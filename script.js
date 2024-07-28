let title = document.querySelector('.title')
let ul = document.querySelector('ul')
let reload = document.querySelector('.reload')


window.onload = function(){
    if(window.navigator.onLine){
        Online()
    }
    else{
        Offline()
    }
}

window.addEventListener('online', function(){
    Online()
})

window.addEventListener('offline', function(){
    Offline()
})

function Online(){

    title.innerHTML='ONLINE NOW'
    title.style.color = 'green'
    ul.classList.add('hide')
    reload.classList.add('hide')

}


function Offline(){

    title.innerHTML = 'OFFLINE NOW'
    title.style.color = 'red'
    ul.classList.remove('hide')
    reload.classList.remove('hide')

}

function _reload(){
    window.location.reload()

}