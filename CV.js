const mostrar = document.getElementById('boton');

mostrar.addEventListener('click', most);

const mostrar1 = document.getElementById('boton1');

mostrar1.addEventListener('click', most1);

const mostrar2 = document.getElementById('boton2');

mostrar2.addEventListener('click', most2);

const mostrar3 = document.getElementById('boton3');

mostrar3.addEventListener('click', most3);

function most(){    
    document.getElementById('desplegable').classList.toggle('oculto');         
};
function most1(){    
    document.getElementById('desplegable1').classList.toggle('oculto');         
};
function most2(){    
    document.getElementById('desplegable2').classList.toggle('oculto');         
};
function most3(){    
    document.getElementById('desplegable3').classList.toggle('oculto');         
};

// const ocultar = document.getElementById('boton');

// ocultar.addEventListener('click', ocult);

// const ocultar1 = document.getElementById('boton1');

// ocultar1.addEventListener('click', ocult1);

// const ocultar2 = document.getElementById('boton2');

// ocultar2.addEventListener('click', ocult2);

// const ocultar3 = document.getElementById('boton3');

// ocultar3.addEventListener('click', ocult3);

// function ocult(){ 
//     document.getElementById('desplegable').classList.add('oculto');           
// };
// function ocult1(){    
//     document.getElementById('desplegable1').classList.add('oculto');         
// };
// function ocult2(){    
//     document.getElementById('desplegable2').classList.add('oculto');         
// };
// function ocult3(){    
//     document.getElementById('desplegable3').classList.add('oculto');         
// };


