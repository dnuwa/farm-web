export default function(num, places) {
  var zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}
