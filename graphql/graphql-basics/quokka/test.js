import _ from 'lodash'

const b = _.head([1,2,3]);
b

const a = [3,4].reduce((acc , cur) => {
  return acc + cur;
});

a


var obj = {
  a: 33
};

var obj2 = {
  a: 34
};

obj, obj2