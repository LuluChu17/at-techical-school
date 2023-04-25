// 
// 
// 
    document.write(`<b>oBjEcTs - 1</b><br>`)
    {
        let obj={1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'}
        // let x=prompt('Введите день недели от 1 до 7')
        let x=5
        document.write(obj[x],'<br>')
    }

    {
        let obj={1:'Январь', 2:'Февраль', 3:'Март', 4:'Апрель', 5:'Май', 6:'Июнь', 7:'Июль', 8:'Август', 9:'Сентябрь', 10:'Октябрь', 11:'Ноябрь', 12:'Декабрь'}
        // let x=prompt('Введите месяц годв от 1 до 12')
        let x=7
        document.write(obj[x],'<br>')
    }
// 
// 
// 
document.write(`<br><b>oBjEcTs - 2</b><br>`)



//
//
//
    document.write(`<br><b>oBjEcTs - Подход программирования через константы в JavaScript
    </b><br>`)
    {
        let arr = [1, 2, 3, 4, 5];
        let res = arr[1] + arr[2];

        console.log(res);
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Поиск ошибок в коде c объектами JavaScript</b><br>`)
    {
        let obj = {x: 1, y: 2, z: 3}
        console.log(obj.x)
    }

    {
        let obj = {x: 1, y: 2, z: 3}
        let key = 'x'

        console.log(obj[key])
    }

    // {
    //     let obj = {x: 1, y: 2, z: 3}
    //     n=obj.length
    //     console.log(obj.length)
    //}
//
//
//
    document.write(`<br><b>oBjEcTs - Операторы больше и меньше в JavaScript</b><br>`)
    {
        let x=12
        if (x>10) {
            document.write(x+'> 10<br>')
        } else {
            document.write(x+'<10<br>')
        }
    }

    {
        let x=5
        if (x<10) {
            document.write(x+'< 10<br>')
        } else {
             document.write(x+'>10<br>')
        }
    }

    {
        let x=10
        if (x>=10) {
            document.write(x+'>= 10<br>')
        } else {
            document.write(x+'<=10<br>')
        }
    }

    {
        let x=9.9
        if (x<=10) {
            document.write(x+'<= 10<br>')
        } else {
            document.write(x+'>=10<br>')
        }
    }

//
//
//
    document.write(`<br><b>oBjEcTs - Проверка на равенство в JavaScript</b><br>`)
    {
        let x=1
        if (x==1) {
            document.write('x=1'+'<br>')
        } else {
            document.write('x!=1'+'<br>')
        }
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Проверка на неравенство в JavaScript</b><br>`)
    {
        let x=0
        if (x!=1) {
            document.write('x!=1'+'<br>')
        } else {
            document.write('x=1'+'<br>')
        }   
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Сравнение переменных в JavaScript</b><br>`)
    {
        let a=4
        let b=9
        if (a>b) {
            document.write(a+'>'+b+'<br>')
        }   else {
            document.write(a+'<'+b+'<br>')
        }
    }

    {
        let a=4
        let b=9
        if (a==b) {
            document.write(a+'='+b+'<br>')
        }   else {
            document.write(a+'!='+b+'<br>')
        }        
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Равенство строк в JavaScript</b><br>`)
    {
        let a='a'
        let b='b'

        if (a==b) {
            document.write(a+'='+b)+'<br>'
        } else {
            document.write(a+'!='+b+'<br>')
        }
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Равенство строк и чисел в JavaScript</b><br>`)
    {
        let a = '123';
        let b = 123;

        if (a==b) {
            document.write(a+'='+b+'<br>')
        } else {
            document.write(a+'!='+b+'<br>')
        }
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Логическое И в JavaScript</b><br>`)
    {
        let num=2

        if (num>0 && num<5) {
            document.write(num+'>'+0+' И '+num+'<'+5+'<br>')
        } else {
            document.write(false+'<br>')
        }
    }

    {
        let n=10

        if (n>=10 && n<=20) {
            document.write(true+'<br>')
        } else {
            document.write(false+'<br>')
        }
    }

    {
        let n1=10
        let n2=12

        if (n1<=1 && n2>=3) {
            document.write(true+'<br>')
        } else {
            document.write(false+'<br>')
        }
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Логическое ИЛИ в JavaScript</b><br>`)
    {   
        let num=5
        if (num == 0 || num > 1 && num < 5 ) {
            document.write('+++'+'<br>');
        } else {
            document.write('---'+'<br>');
        }
    }
//
//
//
    document.write(`<br><b>oBjEcTs - Группировка условий в JavaScript</b><br>`)
    {
        let num = 3;
        
        if ( (num > 5 && num < 10) || num == 20) {
            document.write('+++'+'<br>');
        } else {
            document.write('---'+'<br>');
        }
    }

    {
        let num = 3;
		
        if (num > 5 || (num > 0 && num < 3)) {
            document.write('+++'+'<br>');
        } else {
            document.write('---'+'<br>');
        }
    }

    {
        let num = 3;
		
        if (num == 9 || ((num > 10 && num < 20) || (num > 20 && num < 30))) {
            document.write('+++'+'<br>');
        } else {
            document.write('---'+'<br>');
        }
    }
//
//
//
    console.log(`oBjEcTs - Проверка частей часа через if-else в JavaScript`)
    {
        let age = 19;
        let res;

        if (age >= 18) {
            res;
            
            if (age <= 23) {
                res = 'от 18 до 23';
            } else {
                res = 'больше 23';
            }
        } else {
            res = 'меньше 18';
        }

        console.log(res);
    }
//
//
//
    console.log(`oBjEcTs - Проверка частей часа через if-else в JavaScript`)
    {
        let min = 10;

        if (min >= 0 && min <= 14) {
            console.log('1 четверть');
        }

        if (min >= 15 && min <= 29) {
            console.log('2 четверть');
        }

        if (min >= 30 && min <= 44) {
            console.log('3 четверть');
        }

        if (min >= 45 && min <= 59) {
            console.log('4 четверть');
        }
    }

    {
        let min = 10;

        if (min >= 0 && min <= 19) {
            console.log('1 треть');
        }

        if (min >= 20 && min <= 39) {
            console.log('2 треть');
        }

        if (min >= 40 && min <= 59) {
            console.log('3 треть');
        }
    }
//
//
//
    console.log(`oBjEcTs - Проверка длины строк и массивов в JavaScript`)
    {
        let arr=[1,9,3]

        if (arr.length==3) {
            console.log(Number(arr[0]+arr[1]+arr[2]))
        } else {
            console.log('---')
        }
    }
//
//
//
    console.log(`oBjEcTs - Проверка символов строки в JavaScript`)
    {
        let str='abcdex'

        if (str[0]=='a') {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    {
        let str='abcdex'
        let last=str[str.length-1]

        if (last=='x') {
            console.log(true)
        } else {
            console.log(false)
        }  
    }

    {
        let str='abcdex'

        if (str[0]=='a' || str[0]=='b') {
            console.log(true)
        } else {
            console.log(false)
        }
    }
//
//
//
    console.log(`oBjEcTs - Проверка цифр числа в JavaScript`)
    {
        let x=1234567890
        let last=String(x)

        if (last[last.length-1]==0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    {
        let num=101
        let rest=num%2

        if (rest===0) {
            console.log('Четное число')
        } else {
            console.log('Нечетное число')
        }
    }
//
//
//
    console.log(`oBjEcTs - Проверка остатка от деления в JavaScrip`)
    {
        
    }

    {
        let num1 = 1;
        let num2 = 2;

        if (num1 + num2 === 3) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }

    {
        let num1 = '1';
        let num2 = '2';

        if (Number(num1) + Number(num2) === 3) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }

    {
        let num = 123;
        let first=String(num)
        first=first[0]

        if (first == 1) {
            console.log('+++');
        } else {
            console.log('---'+typeof(first));
        }
    }

// 9
    {
        let num = 12;
        let str = String(num);

        if (str.length === 2) {
            console.log('+++'+' - '+typeof(str.length));
        } else {
            console.log('---');
        }
    }

// 10
    {
        let num = 12;
        let str=String(num)
        
        if (str.length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }

//11
    {
        let num = 12;
        let str=String(num)

        if (String(str.length) === String(2)) {
            console.log('+++');
        } else {
            console.log('---'+typeof(str.length)+typeof(String(2)));
        }
    }

// 12
    {
        let num = 12;
        let str=String(num)

        if (str.length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }

// 13
    {
        let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

        // let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
        // let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

        let sum1 = (+num[0]) + (+num[1]) + (+num[2]);
        let sum2 = (+num[3]) + (+num[4]) + (+num[5]);

        // let sum1 = num[0] + num[1] + num[2];
        // let sum2 = num[3] + num[4] + num[5];

        if (sum1 == sum2) {
            console.log('суммы равны');
        } else {
            console.log('суммы не равны')
        }
    }
// Практика на условия if-else в JavaScript
    console.log('Практика на условия if-else в JavaScript')

// 1
    {
        // let obj={1:'Январь', 2:'Февраль', 3:'Март', 4:'Апрель', 5:'Май', 6:'Июнь', 7:'Июль', 8:'Август', 9:'Сентябрь', 10:'Октябрь', 11:'Ноябрь', 12:'Декабрь'}
        // // let x=prompt('Введите месяц года от 1 до 12')
        // let x=7

        // let month=prompt('Введите число месяца или название месяца')

        let month=1

        if (month==12 || month>=1 && month<=2) {
            console.log('Winter')
        } 

        if (month>=3 && month<=5) {
            console.log('Autumn')
        }

        if (month>=6 && month<=8) {
            console.log('Summer')
        }

        if (month>=9 && month<=11) {
            console.log('Spring')
        } 
    }

// 2
    {
        let str='abcde'

        if (str[0]=='a') {
            console.log('Yes')
        } else {
            console.log('No')
        }
    }

// 3
    {
        let num=12345
        first=Number(num)
        first=first[0]
        if (first==1 || first==2 || first==3) {
            console.log('yes')
        } else {
            console.log('nope')
        }
    }

// 4
    {
        let num=123
        // let str=String(num)
        num=String(num)

        let sum = (+num[0]) + (+num[1]) + (+num[2]);
        console.log(sum)
    }

// 5
    {
        let num = 123033
        num=String(num)
        
        let sum1 = (+num[0]) + (+num[1]) + (+num[2]);
        let sum2 = (+num[3]) + (+num[4]) + (+num[5]);

        if (sum1 == sum2) {
            console.log('суммы равны');
        } else {
            console.log('суммы не равны')
        }

    }

// The End.
