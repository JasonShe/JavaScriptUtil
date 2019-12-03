/**
 * 继承
 * @param { function } Sub 
 * @param { function } Base 
 */
function inherit (Sub, Base) {
  function f () {}

  f.prototype = Base.prototype

  Sub.prototype = new f()

  Object.defineProperty(Sub, 'constructor', {
    enumerable: false,
    value: Sub
  })
}