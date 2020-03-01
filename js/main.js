const rect = document.getElementById("rect1"); //?
// let currDeg = []; //?
let step = 0; //?
function deg() {
  const rotation = (rect.style.transform = `rotate(${step}deg)`); //?
  step = step + 10;
}
setInterval(deg, 500);
