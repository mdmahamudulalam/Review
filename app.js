const info = [
    {
        id: 1,
        img: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/13/bartailed-gotwit.jpg',
        name: 'Bar-tailed godwit',
        text: `The bar-tailed godwit is a long-billed, long-legged wading bird which visits UK shores for the winter. 
        Most usually seen in its grey-brown winter plumage, birds in spring may show their full rich chestnut breeding plumage.`
    },
    {
        id: 2,
        img: 'https://live.staticflickr.com/1924/44004535825_56fcda6b45_b.jpg',
        name: 'Black tern',
        text: `The black tern is a small tern with an all-black head and body, contrasting with grey wings, back and tail in spring`
    },
    {
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Black_Guillemot_Cepphus_grylle.jpg/1200px-Black_Guillemot_Cepphus_grylle.jpg',
        name: 'Black guillemot',
        text: `The black guillemot's striking black and white plumage and bright red feet make it easy to identify in summer.`
    },
    {
        id: 4,
        img: 'https://www.birdguides-cdn.com/cdn/gallery/birds/21-02-3237-Bullfinch.jpg?&height=1080',
        name: 'Bullfinch',
        text: `The male bullfinch is unmistakable with his bright pinkish-red breast and cheeks, grey back, black cap and tail, and bright white rump. `
    },
    {
        id: 5,
        img: 'https://images.fineartamerica.com/images-medium-large-5/bluethroat-pravine-chester.jpg',
        name: 'Bluethroat',
        text: `A small robin-like bird, the male is unmistakable in spring with his bright blue throat, bordered below with bands of black, white and chestnut.`
    },

]

const image = document.getElementById('person-img');
const author = document.getElementById('name');
const description = document.getElementById('text');
const prvewbtn = document.querySelector('.prev-btn');
const nextwbtn = document.querySelector('.next-btn');
const randombtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson();
})

const showPerson = ()=>{
    const item = info[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    description.textContent = item.text;

}

nextwbtn.addEventListener('click', function(){
    if(currentItem > info.length -1){
        currentItem = 0;
    }
    currentItem++;
    showPerson();
})

prvewbtn.addEventListener('click', function(){
    if(currentItem < 0){
        currentItem = info.length -1; 
    }
    currentItem--;
    showPerson();
})
randombtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*info.length)
    showPerson();
})