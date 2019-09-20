
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('not just Oscar')
    .pauseFor(2000)
    .deleteAll()
    .typeString('but also secure computing')
    .pauseFor(2000)
    .deleteAll()
    .typeString('but also research infrastructure')
    .pauseFor(2000)
    .deleteAll()
    .typeString('but also reproduclible science')
    .pauseFor(2000)
    .deleteAll()
    .typeString('and data viz')
    .pauseFor(2000)
    .deleteChars(3)
    .typeString('science')
    .pauseFor(2000)
    .deleteChars(12)
    .typeString('machine learning')
    .pauseFor(2000)
    .deleteChars(16)
    .typeString('software engineering')
    .pauseFor(2000)
    .deleteChars(20)
    .typeString('web development')
    .pauseFor(2000)
    .deleteChars(15)
    .typeString('bioinformatics')
    .pauseFor(2000)
    .deleteAll()
    .start();
