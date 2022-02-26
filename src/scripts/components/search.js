//Поиск в header
const search = document.querySelector('#search-input');
search.oninput = function(){
  let val = this.value.trim();
  const elasticItems = document.querySelectorAll('.card');
  const sliderHide = document.querySelector('.slider')
  if(val != ''){
    elasticItems.forEach(function (elem){
      if (elem.innerText.search(val) == -1){
        elem.classList.add('hide');
        sliderHide.classList.add('hide');
      }
      else{
        elem.classList.remove('hide');
        sliderHide.classList.remove('hide');
      }
    });
  }
  else{
    elasticItems.forEach(function (elem){
        elem.classList.remove('hide');
        sliderHide.classList.remove('hide');
  });
}
}