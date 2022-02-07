// Калькулятор!
//Создаю переменную "Calculator"
let Calculator = (a, oper, b ) =>
    oper == "+"
    ? a+b
    :oper == "-"
    ? a-b
    :oper == "/"
    ? a/b
    :oper == "**"
    ? a**b
    :oper == "*"
    ? a*b
    :oper == "%"
    ? a%b
    :
 // Выводим на экран и на консоль   
    console.log(
        Calculator(
            
            )
       );
document.getElementById("output")
.innerHTML = `<h1>${Calculator(+prompt("Пожалуйста введите число"),
prompt(`Пожалуйста введите оператор ${"+"}, ${"-"}, ${"*"}, ${"/"}, ${"**"}, ${"%"}`),
+prompt("Пожалуйста введите число"))}</h1>`