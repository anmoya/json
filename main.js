var libros = (function () {

    var yeison = [
        {
            titulo: 'El Historiador Desconocido',
            subtitulo: 'Otras yerbas',
            nombreAutor: 'Felipe',
            apellidoAutor: 'Cubillos',
            anio: 1987,
            editorial: 'UC Libros',
            pais: 'Chile',
            ciudad: 'San Ramón',
            paginas: 199,
            estado: true,
            precio: 10000
        },
        {
            titulo: 'El Historiador Desconocido',
            subtitulo: 'Otras yerbas',
            nombreAutor: 'Felipe',
            apellidoAutor: 'Cubillos',
            anio: 1987,
            editorial: 'UC Libros',
            pais: 'Chile',
            ciudad: 'San Ramón',
            paginas: 199,
            estado: true,
            precio: 10000
        },
        {
            titulo: 'El Historiador Desconocido',
            subtitulo: 'Otras yerbas',
            nombreAutor: 'Felipe',
            apellidoAutor: 'Cubillos',
            anio: 1987,
            editorial: 'UC Libros',
            pais: 'Chile',
            ciudad: 'San Ramón',
            paginas: 199,
            estado: true,
            precio: 10000
        },
        {
            titulo: 'El Historiador Desconocido',
            subtitulo: 'Otras yerbas',
            nombreAutor: 'Felipe',
            apellidoAutor: 'Cubillos',
            anio: 1987,
            editorial: 'UC Libros',
            pais: 'Chile',
            ciudad: 'San Ramón',
            paginas: 199,
            estado: true,
            precio: 10000
        }
    ];


    return {
        catalogoLibros: yeison
    }
})();


(function (ctlgLibros) {
    var padre = document.getElementById('padre');
    var libros = ctlgLibros.catalogoLibros;


    for (var i = 0; i < libros.length; i++) {

        padre.innerHTML +=
            '<div class="col"><div class="card" style = "width: 18rem;">' + '<img class="card-img-top" src="img/books/' + (i+1) + '.jpg" alt="Card image cap">' + 
            '<div class="card-body"><h5 class="card-title">' + libros[i].titulo + '</h5>'+
            '<p class="card-text">' + libros[i].nombreAutor + ' ' + libros[i].apellidoAutor  + '</p>'+
            '<a href="#" class="btn btn-primary">' + libros[i].precio + '</a></div></div></div>';


    }

})(libros);


