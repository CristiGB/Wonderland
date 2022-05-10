const container_cards = document.querySelector('.container-cards'),
card1 = container_cards.querySelector('card1'),
card2 = container_cards.querySelector('card2'),
card3 = container_cards.querySelector('card3'),
card4 = container_cards.querySelector('card4');

function onClickMe (){
    var n_img = random(0,14);
    

    if(document.querySelector('.container-flotante')){
        let flotante_imagen = document.querySelector('.container-flotante-img');
        ruta = '../src/assets/images/random/imagen_'+n_img+'.jpg';
        flotante_imagen.src  = ruta;

    }else{
        let flotante = document.createElement('figure');
        flotante.classList.add("container-flotante");
        let flotante_imagen = document.createElement('img');
        flotante_imagen.classList.add('container-flotante-img');
        ruta = '../src/assets/images/random/imagen_'+n_img+'.jpg';
        flotante_imagen.src  = ruta;

        flotante.appendChild(flotante_imagen);
        document.querySelector('.contenido-central').appendChild(flotante);
        añadir_buton_close();
    }
    

}

const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const añadir_buton_close =()=>{
    let cont_btn_cls =document.createElement('div');
    cont_btn_cls.classList.add('container_btn_close');
    let btn_clse=document.createElement('button');
    btn_clse.type='button';
    btn_clse.innerText='Puch Me'
    btn_clse.classList.add('btn_close');
    btn_clse.id = 'btn_close'
    btn_clse.setAttribute('onClick','onClickremover()');

    cont_btn_cls.appendChild(btn_clse);
    document.querySelector('.container-flotante').appendChild(cont_btn_cls);
}
function onClickremover(){
    let flotante = document.querySelector(".container-flotante");
    flotante.remove();
}

