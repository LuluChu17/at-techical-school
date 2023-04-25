// Числа
var pi=3.14
var rad=5.06/2
document.write("Площадь круга = "+pi*rad*rad+"<br>")

нч=3.1415782e+21
document.write("Научная запись - ",нч,"<br>")

let вч=015
document.write("015","<sub>8</sub>"," -> ",вч ,"<br>")

var шч=0x23
document.write("0x23","<sub>16</sub>"," -> ",шч,"<br>")

document.write("Максимальное число JavaScript - ",Number.MAX_VALUE,"<br>")

document.write("Минимальное число JavaScript - ",Number.MIN_VALUE,"<br>")

var x=17
document.write("5*",x,"-7%2+",x,"/5 = ",5*x-7%2+x/5,"<br>")

// True/False
var black=false
document.write(black,"<br>")

// Строка
var строка="Зари догорающей пламя"
document.write(строка,"<br>")
var строка2="Рассыпало по небу искры"
document.write('Рассыпало \r\n  по небу искры',"<br>")
// alert(строка2)

// Infinity
document.write(Math.log(0))
document.write(-1/0)

// NaN(Not a Number - не число)
document.write(Math.sqrt(-1))

//  var x=prompt("Введите какое либо значение")
 if (isNaN(x)) document.write("<br>","Вы ввели нечисловое значение")


function случайное_число(){X=Math.random()}
R=случайное_число
document.write("<br>",R)

// ++ и --
var i=5
i++
document.write("<br>",i)

var I=5
I--
document.write("<br>",I)

var z=17
z+=8
document.write("<br>",z)

let n=2
n*=7-1
document.write("<br>",n)