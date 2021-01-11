const ul = document.getElementById('myalumnisearch');
const nul = document.getElementById('myUrl');

console.log(ul);
console.log(nul);


ul.addEventListener("mouseenter",()=>{
    console.log('Clicked');
    nul.classList.remove('styleOn');
})

// ul.addEventListener("mouseout",()=>{
//     console.log('Clicked');
//     nul.classList.add('styleOn');
// })
