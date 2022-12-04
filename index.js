
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
//dodger.style.bottom = "100px";
dodger.style.bottom = "0px";
//dodger.style.left = "0px";
document.addEventListener("keydown", function (event) {
    console.log(event);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft()
    }else if(event.key === 'ArrowRight'){
      moveDodgerRight()
    }
  });

  function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    
      const left = parseInt(leftNumbers, 10);
  if(left >0){
      dodger.style.left = `${left - 3}px`;
  }
  }

  function moveDodgerRight(){
    let right = dodger.style.left.replace('px','')
    let trueRight = parseInt(right, 10)
    if(trueRight<=360)
    dodger.style.left =`${trueRight + 3}px`
  }