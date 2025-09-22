function render(parameter, beginning){
    let cards = document.getElementById('cards');
    cards.innerHTML = '';
    for (let i = beginning; i < bundeslaender.length; i++) {
        let land = bundeslaender[i];
        cards.innerHTML += `
            <div class="card" title=${land[parameter]}>
                ${land['name']}
            </div>`;
    }
}


function showSidebar(){
    document.getElementById('sidebar').classList.add('show-sidebar');
    document.getElementById('click-sort').classList.add('hide');

}


function sort(parameter){
    bundeslaender.sort(sortByProperty(`${parameter}`));
    bundeslaender.reverse();
    document.getElementById('headline').classList.add('hide')
    showWinner(parameter);
    render(parameter, 1);
}


function showWinner(parameter){
    document.getElementById('winner-container').classList.remove('hide');
    document.getElementById('winner-container').innerHTML = `
    <div class="winner-image">
        <img src="img/${bundeslaender[0]['imagefile']}.jpg" alt="">
    </div>
    <div class="winner-card" title=${bundeslaender[0][parameter]}>
        <div class="underline-a">1. Platz: ${bundeslaender[0]['name']}</div>
    </div>`;  
}


function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
       return 0;  
    }
}