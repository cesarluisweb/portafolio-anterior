var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

//Obtengo el canvas del html y lo ubico en un contexto 2d
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

document.addEventListener("keydown", mover);

// creo unos objetos (parecen variables, pero incluyen varias cosas)
//Cada objeto está identificado por su dirección url y se inicia no estando cargado
var fondo = {
    url: "tile.png",
    cargaOk: false
};

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var carroRight = {
    url: "carroRight.png",
    cargaOk: false
};

var carroLeft = {
    url: "carroLeft.png",
    cargaOk: false
};

var carroUp = {
    url: "carroUp.png",
    cargaOk: false
};

var carroDown = {
    url: "carroDown.png",
    cargaOk: false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false
};

// Se declara esta variable aleatoria para usarla dentro de las funciones dibujar
var cantidad = aleatorio(1, 10);

// Esta es la forma en que cargo las imágenes
fondo.imagen = new Image(); // Puede ser imagen u otro nombre. Lo igualo a un nuevo objeto Image (este sí es así)
fondo.imagen.src = fondo.url; // La fuente es la declarada dentro del objeto arriba
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

carroDown.imagen = new Image();
carroDown.imagen.src = carroDown.url;
carroDown.imagen.addEventListener("load", cargarCarroDown);

carroUp.imagen = new Image();
carroUp.imagen.src = carroUp.url;
carroUp.imagen.addEventListener("load", cargarCarroUp);

carroLeft.imagen = new Image();
carroLeft.imagen.src = carroLeft.url;
carroLeft.imagen.addEventListener("load", cargarCarroLeft);

carroRight.imagen = new Image();
carroRight.imagen.src = carroRight.url;
carroRight.imagen.addEventListener("load", cargarCarroRight);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

//Esta función se activa cuando se carga la imagen respectiva y manda a dibujar cada vez
function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarCarroDown()
{
    carroDown.cargaOk = true;
    dibujar();
}

function cargarCarroUp()
{
    carroUp.cargaOk = true;
    dibujar();
}

function cargarCarroLeft()
{
    carroLeft.cargaOk = true;
    dibujar();
}

function cargarCarroRight()
{
    carroRight.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar();
}

// Aquí se dibujan siempre en orden

var positionPolloX;
var positionPolloY;
var positionVacaX;
var positionVacaY;
var positionPolloX2;
var positionPolloY2;
var positionPolloX3;
var positionPolloY3;
var positionPolloX4;
var positionPolloY4;

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
        var x = aleatorio(2, 7);
        var y = aleatorio(2, 7);
        var x = x * 40;
        var y = y * 40;
        papel.drawImage(vaca.imagen, x, y);
        positionVacaX = x;
        positionVacaY = y;
    }
    if(carroRight.cargaOk)
    {
        var x = 250 - 40;
        var y = 250 - 40;
        papel.drawImage(carroRight.imagen, x, y);
    }
    if(pollo.cargaOk)
    {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
        positionPolloX = x;
        positionPolloY = y;
    }
    if(pollo.cargaOk)
    {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
        positionPolloX2 = x;
        positionPolloY2 = y;
    }
    if(pollo.cargaOk)
    {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
        positionPolloX3 = x;
        positionPolloY3 = y;
    }
    if(pollo.cargaOk)
    {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
        positionPolloX4 = x;
        positionPolloY4 = y;
    }
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

var x = 250 - 40;
var y = 250 - 40;
var cont = 0;
var cont2 = 1;
var posGanarX;
var posGanarY;

function mover(evento)
{
    var movimiento = 4;
    switch(evento.keyCode)
    {
        case teclas.UP:
            if(y > 0)
            {
            papel.clearRect(0, 0, 500, 500);
            dibujar2();    
            papel.drawImage(carroUp.imagen, x, y - movimiento);
            y = y - movimiento;
            cont = cont + aleatorio(-4,0);
            cont2 = cont2 + aleatorio(-4,0);
            }
            if(y <= 0)
            {
                papel.clearRect(0, 0, 500, 500);
                dibujar2();
                papel.drawImage(carroUp.imagen, x, 0);
            }
            console.log(posGanarX, posGanarY, x, y);
            var carroAtras = x + 40;
            var carroDelan = x - 40;
            var carroArriba = y + 30;
            var carroAbajo = y - 30;
            if(
                posGanarX <= carroAtras
                && posGanarX >= carroDelan
                && posGanarY <= carroArriba
                && posGanarY >= carroAbajo) //////////////////
            {
                document.write("¡GANASTE! Presiona F5 para volver a jugar");
            }
        break;
        case teclas.DOWN:
            if(y < 420)
            {
            papel.clearRect(0, 0, 500, 500);
            dibujar2();    
            papel.drawImage(carroDown.imagen, x, y + movimiento);
            y = y + movimiento;
            cont = cont + aleatorio(2,4);
            cont2 = cont2 + aleatorio(-2,2);
            }
            if(y >= 420)
            {
                papel.clearRect(0, 0, 500, 500);
                dibujar2();
                papel.drawImage(carroDown.imagen, x, 420);
            }
            console.log(posGanarX, posGanarY, x, y);
            var carroAtras = x + 40;
            var carroDelan = x - 40;
            var carroArriba = y + 30;
            var carroAbajo = y - 30;
            if(
                posGanarX <= carroAtras
                && posGanarX >= carroDelan
                && posGanarY <= carroArriba
                && posGanarY >= carroAbajo) //////////////////
            {
                document.write("¡GANASTE! Presiona F5 para volver a jugar");
            }
        break;
        case teclas.LEFT:
            if(x > 0)
            {
            papel.clearRect(0, 0, 500, 500);
            dibujar2();    
            papel.drawImage(carroLeft.imagen, x - movimiento, y);
            x = x - movimiento;
            cont = cont + aleatorio(-2,2);
            cont2 = cont2 + aleatorio(-2,2);
            }
            if(x >= 500)
            {
                papel.clearRect(0, 0, 500, 500);
                dibujar2();
                papel.drawImage(carroLeft.imagen, 500, y);
            }
            console.log(posGanarX, posGanarY, x, y);
            var carroAtras = x + 40;
            var carroDelan = x - 40;
            var carroArriba = y + 30;
            var carroAbajo = y - 30;
            if(
                posGanarX <= carroAtras
                && posGanarX >= carroDelan
                && posGanarY <= carroArriba
                && posGanarY >= carroAbajo) //////////////////
            {
                document.write("¡GANASTE! Presiona F5 para volver a jugar");
            }
        break;
        case teclas.RIGHT:
            if(x < 420)
            {
            papel.clearRect(0, 0, 500, 500);
            dibujar2();    
            papel.drawImage(carroRight.imagen, x + movimiento, y);
            x = x + movimiento;
            cont = cont + aleatorio(-2,2);
            cont2 = cont2 + aleatorio(-2,2);
            }
            if(x >= 420)
            {
                papel.clearRect(0, 0, 500, 500);
                dibujar2();
                papel.drawImage(carroRight.imagen, 420, y);
            }
            console.log(posGanarX, posGanarY, x, y);
            var carroAtras = x + 40;
            var carroDelan = x - 40;
            var carroArriba = y + 30;
            var carroAbajo = y - 30;
            if(
                posGanarX <= carroAtras
                && posGanarX >= carroDelan
                && posGanarY <= carroArriba
                && posGanarY >= carroAbajo) //////////////////
            {
                document.write("¡G A N A S T E! -> Presiona F5 para volver a jugar");
            }
        break;
    }
}

function dibujar2()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
        posGanarX = positionVacaX + cont + (aleatorio(-10,10));
        posGanarY = positionVacaY + cont + (aleatorio(-10,10));
        papel.drawImage(vaca.imagen, posGanarX, posGanarY);
        if(posGanarX <= 0 || posGanarX >= 420 || posGanarY <= 0 || posGanarY >= 420)
        {
            papel.clearRect(0, 0, 500, 500);
            document.write("¡ P E R D I S T E! -> Presiona F5 para volver a jugar");
        }
    }
    if(pollo.cargaOk)
    {
        var x = positionPolloX + cont2 + (aleatorio(-4,4));
        var y = positionPolloY + cont2 + (aleatorio(-4,4));
        papel.drawImage(pollo.imagen, x, y);
    }
    if(pollo.cargaOk)
    {
        var x = positionPolloX2 + cont2 + (aleatorio(-4,4));
        var y = positionPolloY2 + cont2 + (aleatorio(-4,4));
        papel.drawImage(pollo.imagen, x, y);
    }
    if(pollo.cargaOk)
    {
        var x = positionPolloX3 + cont2 + (aleatorio(-4,4));
        var y = positionPolloY3 + cont2 + (aleatorio(-4,4));
        papel.drawImage(pollo.imagen, x, y);
    }
    if(pollo.cargaOk)
    {
        var x = positionPolloX4 + cont2 + (aleatorio(-4,4));
        var y = positionPolloY4 + cont2 + (aleatorio(-4,4));
        papel.drawImage(pollo.imagen, x, y);
    }
}