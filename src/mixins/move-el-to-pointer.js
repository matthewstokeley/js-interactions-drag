function moveElToPointer (event) {
  var findX = () => event.clientX - event.target.offsetLeft;
  var findY = () => event.clientY + event.target.offsetTop - event.target.offsetHeight;

  var transform = (el, x, y) => {
      el.style.transform = "translate("+x+"px, "+y+"px)" 
  }

  transform(event.target, findX(), findY());

}