
(function () {

  $formula = document.querySelector('.formula');
  $result = document.querySelector('.result');


  $number = document.querySelectorAll('.number');
  // $plus = document.querySelector('.arithmetic.plus');
  // $sub = document.querySelector('.arithmetic.sub');
  // $noun = document.querySelector('.arithmetic.noun');
  // $division = document.querySelector('.arithmetic.division');
  // $equal = document.querySelector('.equal');
  // $clear = document.querySelector('.num.clear');

  function setresult(value) {
    $result.innerText = String(value);
  }

  function setformula(value) {
    $formula.innerText = String(value);
  }
let expr = 0;
  setresult('0');
  setformula('玩命运算中...');

for(let i=0; i<$number.length; i++) {
$number[i].addEventListener('click', function(event){
  let number = event.currentTarget.getAttribute('data-number');
  if(expr !== 0) {
    expr = expr + number;
  } else {
    expr = number;
  }
    setresult(expr);
});

}


})();