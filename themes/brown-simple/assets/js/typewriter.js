
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('not just Oscar')
    .pauseFor(2000)
    .deleteAll()
    .typeString('but also data science')
    .pauseFor(2000)
    .deleteAll()
    .typeString('and reproducible science')
    .pauseFor(2000)
    .deleteChars(20)
    .typeString('visualization')
    .pauseFor(2000)
    .deleteChars(13)
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
