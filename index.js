const  openMenu = document.querySelector('#show-menu')
const  hideMenuIcon = document.querySelector('#hide-menu')

const sideMenu= document.querySelector('#nav-menu')

openMenu.addEventListener('click',function(){
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click',function(){
    sideMenu.classList.remove('active')
})



const api = 'AIzaSyD4A5M3jGvI4i_YQDTLBQCXsohLyoqfO88'
let container = document.getElementById('container')
const  searchVideos=async()=>{
    // let img = document.createElement('img')
    // img.src = 'https://media3.giphy.com/media/3ohs7TrCSp7c8ZrxBe/200w.webp?cid=ecf05e47ljd0dls3nx2bnwqkhpczze5qwl4eofg9rcjttuid&rid=200w.webp&ct=g'
    // img.id='loader'
    
    // container.append(img)
    try{
        const query = document.getElementById('query').value
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api}&part=snippet&maxResults=25&order=rating`)
        let {items} =await res.json()
        // let actual_data = data.items
        let newData = items
        console.log(newData);
        display(newData)
    }
    catch(err){
        console.log(err);
    }
}
// let arr = JSON.parse(localStorage.getItem('loader'))
// console.log(arr);
let display=(data)=>{
    // let loader = document.getElementById('loader')
    // loader.style.display = null
container.innerHTML=null
// localStorage.setItem('loader',JSON.stringify(data))
data.forEach(({snippet,id:{videoId}}) => {
    // console.log(el);
    let div = document.createElement('div')
    div.setAttribute('id','small-container')
    let poster = document.createElement('img')
    poster.src = snippet.thumbnails.high.url
    let title = document.createElement('h5')
    title.innerText=snippet.title
    let views = document.createElement('p')
    views.innerText = "760k views • 2 weeks ago"

    const chanelName = document.createElement('p')
    chanelName.innertext = snippet.channelTitle
    let data={
        videoId,
        snippet,
    }
    div.onclick=()=>{
        // console.log(title);
        storeclicked(data)



    }
    div.append(poster,title,chanelName,views)
    container.append(div)
    
});


}

const storeclicked=((data)=>{
    console.log(data);
    localStorage.setItem('clicked_item',JSON.stringify(data))
    window.location.href="video.html"
})
//---------------------------------------------------------------------------Popular Videos-----------
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&fields=items(id%2Csnippet(title,thumbnails,channelId))&key=${api}&maxResults=20
// let getData = new Promise(function (resolve,reject){
//     setTimeout(function(){
//         let movies = arr 
//         // console.log(movies);
//         if(arr != null){
//             resolve(movies)
//         }
//         else{
//             reject('data not found')    
//         }
//     },3000)
// })
// async function main(){
//     try{
//         let res = await getData
//         console.log(res);
//         display(res)
//     }
//     catch(err){
//     console.log(err)
//     }
// }
// main()

    const popularVideos=async()=>{

        try{
    
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&fields=items(id%2Csnippet(title,thumbnails,channelId))&key=${api}&maxResults=25`)
            let {items} = await res.json()
            let newData = items
            
                display(newData)
            
            
            // console.log(newData);
        }
        catch(err){
            console.log("video not fopund");
        }
    }
    popularVideos()


//--------------------------------filter-----------------------------------

const filter=async()=>{

    try{
        let filter = document.getElementById('filter').value
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?order=${filter}&key=${api}&part=snippet&maxResults=20&myRating=like`)
        let {items} = await res.json()
        let newData = items
        // console.log(newData);
        display(newData)
    }
    catch(err){
        console.log('Video Not Found');
    }
}   

filter()

