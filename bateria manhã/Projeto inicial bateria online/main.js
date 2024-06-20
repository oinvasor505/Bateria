
function tocaSom(idAudioElemento){

  let audioElemento =  document.querySelector(idAudioElemento);

  if(audioElemento){
    audioElemento.currentTime = 0;
    audioElemento.play();
  }

}


const  _teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < _teclas.length; i++)
{
    const tecla = _teclas[i];
    const instrumento = _teclas[i].classList[1];
    const idAudio = `#som_${instrumento}`;
    
    _teclas[i].onclick = function(){tocaSom(idAudio);}
}


document.body.addEventListener('keyup',function(event){

  playSound(event.code.toLowerCase());



})

document.querySelector('.composer  button' ).addEventListener('click', ()=>{
  let song = document.querySelector('#input').value;

  if(song !== ''){
    let songArray = song.split('');
    playComposition(songArray);
  }




})



function playSound(sound){

  let audioElement = document.querySelector(`.s_${sound}`);
  let keyElement = document.querySelector(`.${sound}`);

  if(audioElement){
    audioElement.play();
  }


  if(keyElement){
    keyElement.classList.add('ativa');
    setTimeout(()=>{

      keyElement.classList.remove('ativa')

    },300);
  }

}

function playComposition(songArray)
{
  let wait = 0;
  for (let item of songArray)
  {
    setTimeout(()=>{
      playSound(`key${item}`);
    },wait);
    wait +=250;
  }
}