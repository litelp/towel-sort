
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let revers = false;
  let result = [];
  if (matrix === undefined || matrix[0] === undefined) {
      return [];
  }

  matrix.forEach(el => {
      if (revers === false) {
          revers = true;
          if (Array.isArray(el)) return el.forEach(el => result.push(el));
          result.push(el);
      } else {
          revers = false;
          let a = el.reverse();
          if (Array.isArray(el)) return a.forEach(el => result.push(el));
          result.push(el);
      }
  })

return result;
}