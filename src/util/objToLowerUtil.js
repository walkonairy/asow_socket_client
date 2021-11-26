const obj = {
  Name: '111',
  Children: [
    {
      Name: '222',
      Children: [{ Name: '333' }, { Name: '444' }],
    },
    {
      Name: '555',
      Children: [],
    },
  ],
  Color: undefined,
  Eye: null,
  Age: 12,
  Cats: ['A', 'B'],
};

function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function objKeysToLowerCase(obj) {
  for (const objKey in obj) {
    if (isArray(obj[objKey]) && isObj(obj[objKey][0])) {
      const arr = obj[objKey];
      arr.forEach(objKeysToLowerCase);
    }
    obj[objKey.toLowerCase()] = obj[objKey];
    delete obj[objKey];
  }
  return obj;
}

const lowerObj = objKeysToLowerCase(obj);
console.log(lowerObj);
