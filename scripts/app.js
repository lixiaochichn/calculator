
(function () {

  $formula = document.querySelector('.formula');
  $result = document.querySelector('.result');


  $number = document.querySelectorAll('.number');
  $plus = document.querySelector('.arithmetic.plus');
  $sub = document.querySelector('.arithmetic.sub');
  $noun = document.querySelector('.arithmetic.noun');
  $division = document.querySelector('.arithmetic.division');
  $equal = document.querySelector('.equal');
  $dot = document.querySelector('.dot');
  $clear = document.querySelector('.num.clear');
  $header = document.querySelector('.header');

  function setresult(value) {
    expr = String(value);
    $result.innerText = expr;
  };

  function setformula(value) {
    exprf = String(value);
    $formula.innerText = exprf;
  };
  let expr = '0';
  let exprf = '';
  let ready = 0;
  let operate = ['+', '-', '*', '/', '.'];
  setresult(expr);
  setformula(exprf);

  for (let i = 0; i < $number.length; i++) {
    $number[i].addEventListener('click', function (event) {
      if (ready === 1) {
        expr = "0";
        let exprf = '';
        setresult(expr);
        setformula(exprf);
        ready = 0;
      };
      let number = event.currentTarget.getAttribute('data-number');
      if (expr !== '0') {
        expr = String(expr + number);
      } else {
        expr = String(number);
      }
      setresult(expr);
    });
  };

  $plus.addEventListener('click', function () {
    if (operate.indexOf(expr[expr.length - 1]) > -1) {
      expr = expr.slice(0, expr.length - 1) + '+';
    } else { expr = expr + '+'; }
    setresult(expr);
    ready = 0;
  });

  $sub.addEventListener('click', function () {
    if (operate.indexOf(expr[expr.length - 1]) > -1) {
      expr = expr.slice(0, expr.length - 1) + '-';
    } else { expr = expr + '-'; }
    setresult(expr);
    ready = 0;
  });

  $noun.addEventListener('click', function () {
    if (operate.indexOf(expr[expr.length - 1]) > -1) {
      expr = expr.slice(0, expr.length - 1) + '*';
    } else { expr = expr + '*'; }
    setresult(expr);
    ready = 0;
  });
  $division.addEventListener('click', function () {
    if (operate.indexOf(expr[expr.length - 1]) > -1) {
      expr = expr.slice(0, expr.length - 1) + '/';
    } else { expr = expr + '/'; }
    setresult(expr);
    ready = 0;
  });

  $dot.addEventListener('click', function () {
    if (ready === 1) {
      expr = "0";
      let exprf = '';
      setresult(expr);
      setformula(exprf);
      ready = 0;
    };
    if (expr[expr.length - 1] === '.') { }
    else if (operate.indexOf(expr[expr.length - 1]) > -1) {
      expr = expr + '0.';
    } else { expr = expr + '.'; }
    setresult(expr);
  });
  $clear.addEventListener('click', function () {
    expr = "0";
    let exprf = '';
    setresult(expr);
    setformula(exprf);
  });
  $equal.addEventListener('click', function () {
    if (operate.indexOf(expr[expr.length - 1]) > -1) {
      if (ready === 0) exprf = expr.slice(0, expr.length - 1) + '=';
      expr = eval(expr.slice(0, expr.length - 1));
    } else {
      if (ready === 0) exprf = expr + '=';
      expr = eval(expr);
    }
    if (String(eval(expr) - eval(expr).toFixed(0)).length > 8) expr = eval(expr).toFixed(6);
  
    setresult(expr);
    setformula(exprf);
    ready = 1;
  });

  function resize() {
    let maxWidth = $resullt.clientWidth;
    if($resullt.scrollWidth > maxWidth){$resullt.style.tranform = 'scale(${maxWidth / $resullt.scrollWidth})'};
  }


})();