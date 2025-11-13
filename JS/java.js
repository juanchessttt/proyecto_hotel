let img = document.querySelector('img.inicio1')
img.addEventListener('click', function() {
    if (img.src.includes('IMAGENES/img1.jpg'))
    {
        img.src = 'IMAGENES/img2.jpg'

    } else if( img.src.includes('IMAGENES/img2.jpg')){
        img.src = 'IMAGENES/img3.jpg'
    }
     else{
        img.src = 'IMAGENES/img1.jpg'
    }
})
function validar(){
    let email = document.querySelector('#correoboton').value;
    let nombre = document.querySelector('#nombreboton').value;
    let tel = document.querySelector('#telboton').value;

   if(email == "")
{
    alert("debe introducir un correo electronico");
    return false;
}
if(nombre == "")
{
    alert("debe introducir un nombre");
    return false;
}
if(tel == "")
{
    alert("debe introducir un telefono");
    return false;
}
return true;

}
