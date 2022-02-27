//Поиск в header
function searchCard (){
  const value = document.querySelector('.header__input').value
  const cards = document.querySelectorAll('.card');
  //const slider = document.querySelector('.slider');
  if(value === ''){
    cards.forEach(function(card){
      card.classList.remove('hide');
      //slider.classList.remove('hide');
    });
  }else {
    cards.forEach(card => {
      if (card.textContent.toLowerCase().search(value.toLowerCase()) === -1) {
        card.classList.add('hide');
        //slider.classList.add('hide');
      } else{
        card.classList.remove('hide');
        //slider.classList.remove('hide');
      }
    })
  }
}

export {searchCard}