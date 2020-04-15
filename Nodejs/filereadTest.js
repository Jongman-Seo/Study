const Q = require('q');
const fs = require('fs');

const readFile = (filename, encoding) => {
  return new Promise((resolve, reject) => {
    // noinspection JSUnresolvedFunction for Intellij Idea
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const genFile = () => {
  return readFile('./helloWorld.js', 'utf8')
    .then (tmpl => {
      console.log('hi');
      console.log(tmpl);
      return tmpl;
    });
};

genFile();

// const tmp = readFile('./helloWorld.js', 'utf8')
//     .then (tmpl => {
//       console.log('hi');
//       console.log(tmpl);
//       return tmpl;
//     });


//fs.readFile('./helloWorld.js','utf8',(err,data) => console.log(data));

