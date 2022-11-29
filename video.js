const  openMenu = document.querySelector('#show-menu')
const  hideMenuIcon = document.querySelector('#hide-menu')

const sideMenu= document.querySelector('#nav-menu')

openMenu.addEventListener('click',function(){
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click',function(){
    sideMenu.classList.remove('active')
})



const video = document.getElementById('video')
const video_details = document.getElementById('video_details')

// let container = document.getElementById('main')
const playVideo=()=>{
// container.innerHTML=null
let {videoId,snippet} = JSON.parse(localStorage.getItem('clicked_item')) || []
// console.log(data);

let iframe = document.createElement('iframe')
iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
iframe.width='100%'
iframe.height='100%'
iframe.setAttribute('allowfullscreen',true);
let title = document.createElement('h2')
title.innerText=snippet.title
let views = document.createElement('p')
views.innerText = "760,055,43 views "
views.setAttribute('id','views')

video.append(iframe)
video_details.append(title,views)

// container.append(video_details)
}
// playVideo()