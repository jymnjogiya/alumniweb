const searchAlumni = () => {
    let filter = document.getElementById('myalumnisearch').value.toUpperCase();
    let ul =document.getElementById('myUrl');
    let li = ul.getElementsByTagName('li');

    for(let i=0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.innerText;
        if(textValue.toUpperCase().indexOf(filter) > -1 ){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}

