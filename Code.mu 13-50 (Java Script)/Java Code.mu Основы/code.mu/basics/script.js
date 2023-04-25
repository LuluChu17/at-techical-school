//  
    document.write('<b>','14','</b><br>')
let name='Chingis'
let name2='Bayir'
document.write(name,' ',name2,'</br>')
// 
    document.write('<br><b>','15','</b><br>')
let str='!!!'
document.write(str,'</br>')

let j='java'
let s='script'
document.write(j+''+s,'</br>')

let h='hello'
let w='world'
document.write(h+' '+w,'</br>')
// 
    document.write('<br><b>','16','</b><br>')
let long='loooooooong and banoana'
document.write(long+' - '+long.length+' '+'символа(ов)'+'</br>')
// 
    document.write('<br><b>','17','</b><br>')
let a='aaa'
let b='bbb'
document.write(a+' xxx '+b+' yyy ','</br>')
document.write(`${a} + xxx + ${b} + ooo`,'</br>')

let abc=`a<br>
b<br>
c`
document.write(abc,'</br>')
// 
    document.write('<br><b>','18','</b><br>')
let und=undefined
document.write(und,'</br>')

let nuo=null
document.write(nuo,'</br>')

let tru=true
let fals=false
document.write(tru,' | ',fals,'</br>')

let pip='pip'
let cool='cool'
document.write(pip*cool,'</br>')

document.write(10/0,'</br>',-10/0,'</br>')
// 
    document.write('<br><b>','19','</b><br>')
let num1=111
let num2=222
let num3=333
console.log(num1+'+'+num2+'-'+num3)

console.log(123)
console.log('barba 123')

// alert(abu)
// 
    document.write('<br><b>','20','</b><br>')
const PI=3.14
krug=180*PI
document.write(`Радиус окружности равен = ${180*PI}</br>`)
// 
    document.write('<br><b>','21','</b><br>')
let g1='5s'+'2'
let g2=(-'5')+(-'2')
let g3=''+3+1
let g4='5'/'2'
document.write(g1,'</br>',g2,'</br>',g3,'</br>',g4,'</br>')
// 
    document.write('<br><b>','22','</b><br>')
let a1=Number('10')
let b1=Number('20')
document.write(`${a1}+${b1}=${a1+b1}<br>`)

let a2=+'2'
let b2=+'3'
document.write(`${a2}+${b2}=${a2+b2}<br>`)

let a3='45s'
document.write(Number(a3),'</br>')
// 
    document.write('<br><b>','23','</b><br>')
let px1=parseFloat('5px')
let px2=parseFloat("6px")
document.write(`${px1}px+${px2}px=${px1+px2}px <br>`)

let px3=parseFloat('5.5px')
let px4=parseFloat("6.25px")
document.write(`${px3}px+${px4}px=${px3+px4}px <br>`)
// 
    document.write('<br><b>','24','</b><br>')
let str1=111
let str2=222
document.write(String(str1)+String(str2),'</br>')

let numb=55555
let nonumb=String(numb)
document.write(nonumb.length,'</br>')

let n1=1
let n1str=String(n1)
let n2=22
let n2str=String(n2)
document.write(n1str.length+n2str.length)
// 
    document.write('<br><b>','26','</b><br>')
let test=Boolean(3*'abc')
console.log(test)

let test2=Boolean(1/0)
console.log(test2)
// 
    document.write('<br><b>','27','</b><br>')
let s1='abcde'
document.write(s1[0],s1[2],s1[4],'</br>')
document.write(s1[4],s1[3],s1[2],s1[1],s1[0],'</br>')

let s1n=0
document.write(s1[s1n],'</br>')
// 
   document.write('<br><b>','28','</b><br>')
let z1='Russia'
let z1l=z1.length-1
document.write(z1[z1l])

let z2l=z1.length-2
document.write(z1[z2l])

let z3l=z1.length-3
document.write(z1[z3l])
// 
   document.write('<br><b>','29','</b><br>')
{
    let x='12345'
    document.write(Number(x[0])+Number(x[1])+Number(x[2])+Number(x[3])+Number(x[4]),'<br>')    
}

{
    let x1=12345
    let x=String(x1)
    document.write(Number(x[0])+Number(x[1])+Number(x[2])+Number(x[3])+Number(x[4]),'<br>')
}
        {
            let x1=12345
            let x=String(x1)
            document.write((x[0])*(x[1])*(x[2])*(x[3])*(x[4]),'<br>')
        }

        {
            let x1=12345
            let x=String(x1)
            document.write((x[4])+(x[3])+(x[2])+(x[1])+(x[0]),'<br>')
        }

    document.write('<br><b>','30','</b><br>')
        {
            let num = 47;
            num += 7;
            document.write(num,'<br>');
        }
        
        {
            let num = 47;
            num -= 18;
            document.write(num,'<br>');
        }

        {
            let num = 47;
            num /= 15;
            document.write(num,'<br>');
        }

        {
            let num = 47;
            num *= 10;
            document.write(num,'<br>');
        }

    document.write('<br><b>','31','</b><br>')
        {
            let num = 10;
            num++;
            document.write(num,'<br>');
        }

        {
            let num = 10;
            num--;
            document.write(num,'<br>');
        }