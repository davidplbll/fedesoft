var button = document.getElementById('buttonHeader');
var contenedor = document.getElementById("navPrincipal")
var index = 0
var data=['Material','About Modulos', 'Our Story','Contact']
button.addEventListener('click', function () {
  console.log("------>click")
  if (index == 0) {
    var ul=document.createElement('lu')
    for(i=0;i<4;i++ ){
      var li=document.createElement('li');    
      li.appendChild(document.createTextNode(data[i]));
      ul.appendChild(li);  
    }
    var bajo=document.createElement('div');
    bajo.classList.add('nav4');
    bajo.appendChild(ul);
    contenedor.appendChild(bajo);
    index = 1;
    console.log("-<<<<<<<>>>>>>>---")
  } else {
    contenedor.removeChild(contenedor.lastChild);
    index = 0;
  }
})