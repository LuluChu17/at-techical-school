// a=3; b=7; alert(`Сумма ${a} + ${b} равна ${a+b}`)

var человек='Степан'
var возраст=78
function names(строка, человекП, возрастП){
    var str0=строка[0]
    var str1=строка[1]
    if (возрастП>60){
        возрастП='пожилым'
    } else{
        возрастП='молодым'
    }
    return `${str0}${человекП}${str1}${возрастП}`
}
var output=names`Этот ${человек} является ${возраст}`
document.write("<br>"+output+"<br>")

document.write(`<br>`)

// let применяется для задания пременной с блочной областью видимости {let}
// var применятся для задания переменной с глобальной областью видимости|в пределах документа html и внутри функции
{
    let a=90
}
{
    let a= 60
    document.write(a)
}

document.write(`<br>`)
// Множественный переход
{
    function random_number(){
        var x=Math.random()*5+1
        return Math.round(x)
    }
    var total1=0, total2=0, total3=0, total4=0, total5=0, total6=0
    for(i=1;i<=1000;i++){
        switch (random_number()){
            case 1:
                total1++
                break
            case 2:
                total2++
                break
            case 3:
                total3++
                break
            case 4:
                total4++
                break
            case 5:
                total5++
                break
            case 6:
                total6++
        }
    }
    document.write("<table>")
    document.write("<tr><th>Грань</th><th>Число выпадений</th>")
    document.write("<tr><td>1</td><td>"+total1+"</td>")
    document.write("<tr><td>2</td><td>"+total2+"</td>")
    document.write("<tr><td>3</td><td>"+total3+"</td>")
    document.write("<tr><td>4</td><td>"+total4+"</td>")
    document.write("<tr><td>5</td><td>"+total5+"</td>")
    document.write("<tr><td>6</td><td>"+total6+"</td>")
    document.write("</table>")
}
document.write(`<br>`)
{
    // let x=prompt('input natural number')
    let x=9
    if (x%3==0)
        document.write('кратно')
    else document.write('некратно')
}
document.write(`<br>`)
{
    let x=-9
    if (x%3==0 && x<0)
        document.write('кратно и отрицательно')
    else document.write('некратно или неотрицательно')
}
document.write(`<br>`)
{
    // let a=prompt('input natural number a')
    // let b=prompt('input natural number b')
    let a=50
    let b=51
    let s=Number(a)+Number(b)
    if (s>100 && s<500)
        document.write(`100<${s}<500`)
    else 
        document.write("no")
}
document.write(`<br>`)
{
    // let x=prompt('input natural number')
    let x=2
    let x1=1/x
    if (x=!0)
        document.write(x1)
    else
        document.write('x=0')
}



