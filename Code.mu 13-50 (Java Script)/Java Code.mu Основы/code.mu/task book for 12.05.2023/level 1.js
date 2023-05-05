// 
// 
//  1.1
console.log('1.1')

{    
    let n=1

    if (n<0) {
        console.log(n+' — Отрицательное число')
    } else {
        console.log(n+' — Положительное число')
    }
}

{
    let str='where you?'

    console.log(str+' — '+str.length)
}

{
    let str='where you?'
    let last=str.length-1

    console.log(str+' — '+str[last])
}

{
    let n=7

    if (n%2==0) {
        console.log('четное')
    } else {
        console.log('нечетное')
    }
}

{
    let str1='where you?'
    let str2='who are u?'

    if (str1[0]==str2[0]) {
        console.log('первые буквы этих слов совпадают')
    } else {
        console.log('первые буквы этих слов НЕ совпадают') 
    }
}

{
    let str='where you?'
    let last=str.length-1

    if (str[last]=='?') {
        console.log(str[last-1])
    } else {
        console.log(str[last])
    }
}
// 
// 
//  1.2
console.log('')
console.log('1.2')

{
    let num=1337; num=String(num)
    let first=0

    console.log(num[first])
}

{
    let num=1337; num=String(num)
    let last=num.length-1

    console.log(num[last])
}

{
    let num=1337; num=String(num)

    let first=0
    let last=num.length-1

    console.log(Number(num[first])+Number(num[last]))
}

{
    let num=1337; num=String(num)

    console.log(num.length)
}

{
    let num1=1337; num1=String(num1)
    let num2=7337; num2=String(num2)

    let first=0

    if (num1[first]==num2[first]) {
        console.log('первые цифры этих чисел совпадают.')
    } else {
        console.log('первые цифры этих чисел НЕ совпадают.')
    }
}
// 
// 
//  1.3
console.log('')
console.log('1.3')

{
    let str='aya'
    let prelast=str.length-2

    if (str.length>1) {
        console.log(str[prelast])
    } else {
        console.log('1 символ')
    }
}

{
    let num1=10
    let num2=2

    if (num1%num2==0) {
        console.log('первое число без остатка делится на второе')
    } else {
        console.log('первое число без остатка НЕ делится на второе')
    }
}
// 
// 
//  1.4
console.log('')
console.log('1.4')

{
    for (let i=1; i<=100; i++) {
        console.log('все целые числа от 1 до 100.')
    }
}

{
    for (let i=-100; i<=0; i++) {
        console.log('все целые числа от -100 до 0.')
    }
}

{
    for (let i=100; i>=1; i--) {
        console.log('все целые числа от 100 до 1.')
    }
}
console.log('')
{
    for (let i=1; i<=100; i++) {
        if (i%2==0) {
            console.log(' — все четные числа из промежутка от 1 до 100.')
            document.write(i+' — все четные числа из промежутка от 1 до 100.<br>')
        }
    }
    document.write('<br><b>')
}
console.log('')
{
    for (let i=1; i<=100; i++) {
        if (i%3==0) {
            console.log(' — все числа кратные трём из промежутка от 1 до 100.')
            document.write(i+' — все числа кратные трём из промежутка от 1 до 100.<br>')
        }
    }
}
// 
// 
//  1.5
console.log('')
console.log('1.5')

{   
    let s=0

    for (let i=1; i<=100; i++) {
    s=s+i
    }
    console.log(s)
}

{
    let s=0

    for (let i=1; i<=100; i++) {
        if (i%2==0) {
            s=s+i
        }
    }
    console.log(s)  
}

{
    let s=0

    for (let i=1; i<=100; i++) {
        if (i%2!=0) {
            s=s+i
        }
    }
    console.log(s)  
}

{
    let num1=12
    let num2=7

    console.log(num1%num2)
}

{
    let str='where you?'

    for (let i=str.length-1; i>=0; i--) {
        console.log(str[i])
    }
}
// 
// 
//  1.6
console.log('')
console.log('1.6')

{
    let arr=[1,2,3,4,5,6]
    let s=0

    for (let i=0; i<=arr.length-1; i++) {
        s=s+(arr[i]**2)
    }
    console.log(s)
}

{
    let arr=[1,2,3,4,5,6]
    let s=0

    for (let i=0; i<=arr.length-1; i++) {
        s=s+(Math.sqrt(arr[i]))
    }
    console.log(s)
}

{
    let arr=[1,2,3,-4,5,-6]
    let s=0

    for (let i=0; i<=arr.length-1; i++) {
        if (arr[i]>0) {
            s=s+arr[i]
        }
    }
    console.log(s)
}

{
    let arr=[1,2,3,-4,5,-6,12,40,8,9]
    let s=0

    for (let i=0; i<=arr.length-1; i++) {
        if (arr[i]>0 && arr[i]<10) {
            s=s+arr[i]
        }
    }
    console.log(s)
}
// 
// 
//  1.7
console.log('')
console.log('1.7')

{
    let str='abcde'
    let arr=[]

    for (let i=0; i<str.length; i++) {
        arr.push(str[i])
    } 
    console.log(arr)
}

{
    let arr = [];

    for (let i = 1; i <= 5; i++) {
        arr.push(i);
    }

    console.log(arr)
}

{
    let num=12345
    num=String(num)
    let mun=''  //костыль

    for (let j=num.length-1; j>=0; j--) {
        mun+=num[j]
    }
    mun=Number(mun) //костыль
    console.log(mun)
}

{
    let num=12345; num=String(num)
    let res=0

    for (let j=0; j<num.length; j++) {
        res+=Number(num[j])
    }
    console.log(res)
}
// 
// 
//  1.8
console.log('')
console.log('1.8')
{
    let arr=[]

    for (let j=1; j<=10; j++) {
        arr.push(j)
    }
    console.log(arr)
}

{
    let arr=[]

    for (let j=1; j<=100; j++) {
        if (j%2==0) {
            arr.push(j)
        }
    }
    console.log(arr)
}

{
    let arr=[1.456, 2.125, 3.32, 4.1, 5.34]

    for (let j=0; j<arr.length; j++) {
        arr[j]=arr[j].toFixed(1)
    }
    console.log(arr)
}
// 
// 
//  1.9
console.log('')
console.log('1.9')
{
    let arr=['w http://','h','http:// e','r','e','http://u?']
    let h='http://'

    
}

{
    let arr=['w http://','h.html','http:// e','r.html','e','http://u?']
   

    for (let elem of arr) {
        let first=length-5
        let last=length-1

        if (elem[first]=='.' && elem[last]=='l') {
            console.log(elem)
        } else {
            
        }
    }
    console.log(arr)

}

{
    let arr=[100,2,3,-4,5,-6,12,40,8,9]

    for (let j=0; j<arr.length; j++) {
        arr[j]=arr[j]/100*110
    }
    console.log(arr)
}