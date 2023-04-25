document.write('Первое задание','<br>')
var x=prompt('1) Введите число');
    if (x % 3==0)
        document.write("<b>",'Число делится на 3 без остатка',"</b>")
    else
        document.write("<b>",'Число не делится на 3 без остатка',"</b>");
document.write('<br>','<br>')

document.write('Второе задание','<br>')
var z=prompt('2) Введите число');
if (z%3==0 && z>=0)
     document.write("<b>",'Число кратно 3 и является положительным',"</b>")
else
     document.write("<b>",'Число не делится на 3 без остатка или является отрицательным',"</b>");  
document.write('<br>','<br>')

document.write('Третье задание','<br>')
y=prompt('3) Введите число (y)');
n=prompt('3) Введите число (n)');
if (y+n>100 && y+n<500)
    document.write("<b>",`Сумма ${y}+${n} больше ста и меньше 500`,"</b>")
else
    document.write("<b>",`Сумма ${y} + ${n} не больше ста и не меньше 500`,"</b>")
document.write('<br>','<br>')

document.write('Четвёртое задание','<br>')
X=prompt('4) Введите значение переменной X')
S=1/X
if (X=!0)
    document.write('<b>',S,'</b>')
else
    document.write('X равно 0')
document.write('<br>','<br>')

/*document.write('Пятое задание','<br>')
N=prompt('5) Введите число N')
var sum=0
do {
    for (sum%5==0; sum%3==!0;)
    document.write(sum+'<br>')
    sum++
} while (sum<=N)*/
