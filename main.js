var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('La disciplina te lleva donde la motivación no alcanza.')
    .pauseFor(2500)
    // .deleteChars(6) //contar cuantos caracteres quieres borrar
    // .typeString('<strong>programar!</strong>')
    // .pauseFor(2500)
    .start();