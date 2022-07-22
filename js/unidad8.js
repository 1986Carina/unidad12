/* Inicio de galeria*/

/* paso 1: coloco las imágenes*/
var imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg", "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg", "img21.jpg", "img22.jpg", "img23.jpg", "img24.jpg", "img25.jpg", "img26.jpg", "img27.jpg", "img28.jpg", "img29.jpg"]

/* Paso 2: que imagen muestro*/
var ImagenActual =0

/* Paso 3: botones*/
document.getElementById("adelante").addEventListener("click",cambiarImagen1)
document.getElementById("atras").addEventListener("click",cambiarImagen1)

/* Paso 4: función*/
function cambiarImagen1(){
	var boton = this.id

	if(boton =='adelante') {
		ImagenActual --
		if (ImagenActual < 1) {
			ImagenActual=imagenes.length -1;
		}
	} else {
		ImagenActual ++
		if (ImagenActual ==imagenes.length) {
			ImagenActual =1;
		}
	}
	var ImagenMostrar = imagenes [ImagenActual]
	document.getElementById('galeria_1').src = 'Imagenes/galeria/'+ ImagenMostrar
}

/* fin de galeria*/

