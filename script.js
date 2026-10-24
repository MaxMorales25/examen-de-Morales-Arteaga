function llamar() {
    for (let i = 0; i < 10; i++) {
        const arti = document.createElement('li');
        arti.innerHTML = "articulo " + (1+i);

        document.getElementById("catalogo").append(arti);
    }   
}