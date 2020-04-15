const http = require('http');

const parseCookies = (cookie = '') =>
    cookie
      .split(';')
      .map(v=>v.split('='))
      .map(([k, ...vs]) => [k, vs.join('=')])
      .reduce((acc, [k,v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
      }, {});

console.log('name=abc;year=1994');
console.log(parseCookies('name=abc;year=1994'));