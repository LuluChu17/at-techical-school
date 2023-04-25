// 
// 
// 
    document.write(`<b>32</b><br>`)  
    {
        let a=0.1*0.2

        document.write(+a.toFixed(3),'<br>')
    }

    {
        let a=0.3-0.1

        document.write(+a.toFixed(3),'<br>')
    }
// 
// 
// 
    document.write(`<br><b>33</b><br>`)
    {
        // document.write('Ваш возраст: ' + prompt('Сколько вам лет?'))
        document.write('Ваш возраст: 20','<br>')
    }

    {
        // let x=prompt('enter a number')
        // let y=prompt('enter a number')
        let x=20
        let y=23

        document.write((+x)+(+y),'<br>')
    }

    {
        // let a=prompt('Введите сторону квадрата')
        let a=5
        let s=a**2

        document.write('Площадь квадрата: ',s,'<br>')
    }

    {
        // let a=prompt('Введите длину прямоугольника')
        // let b=prompt('Введите ширину прямоугольника')
        let a=7
        let b=4
        let s=a*b

        document.write('Площадь прямоугольника: ',s,'<br>')
    }
// 
// 
// 
    document.write(`<br><b>34</b><br>`)
    {
        document.write('Какой-нибудь текст<br>')
        document.write('<i>Курсивный текст</i><br>')

        let a='Peremennaya kursivom'
        document.write('<i>'+a+'</i><br>')

        document.write('odin<br>dwa<br>tree<br>chetyre<br>pyat<br>')
    }
// 
// 
// 
    document.write(`<br><b>35</b><br>`)
    {
        let num1 = 1
        let num2 = 2

        document.write(`сумма: ${num1 + num2}<br>`);
    }

    {
        let a = 1
        let b = 2
        let c = 3

        document.write(`сумма: ${a+b+c}<br>`);
    }

    {
        let num = '123';
        let sum = `${Number(num[0]) + Number(num[1]) + Number(num[2])}`;

        document.write('сумма: ',sum,'<br>');
    }

    {
        let num = 123

        document.write('первая цифра: ',String(num)[0],'<br>')
    }

    {
        let a = 0;

        document.write(++a,'<br>');
    }

    {
        let num = 123;

        document.write(String(num).length,'<br>');
    }

    {
        let a = 24 * 60 * 60;

        document.write('Секунд в сутках: ',a,'<br>');
    }

    {
        let num = 123;
        let str = String(num);

        document.write(str.length,'<br>');
    }

    {
        let num = 123;
        let str = String(num);

        document.write(str[2],'<br>');
    }

    {
        let num = 123;
        let str = String(num);

        document.write(str.length,'<br>');
    }

    {
        let num = 123
        let str = String(num)

        document.write(str[2],'<br>')
    }

    {
        let a = '123';
        let b = '456';
        let s = Number(a) + Number(b);

        document.write('сумма: ',s,'<br>');
    }

    {
        let a = 1;
        let b = 2;
        let c = 3;

        document.write(a + b + c,'<br>');
    }
// 
// 
// 
document.write(`<br><b>36</b><br>`)
    {   
        let sday=24*60*60
        let sday30=sday*30
        let syear=sday*365
        let mday=24*60
        let myear=mday*365

        document.write(`${sday} - секунд в сутках <br> ${sday30} - секунд в 30-ти сутках <br> ${syear} - секунд в году <br> ${mday} - минут в сутках <br> ${myear} - минут в году <br>`)
        
        let byte=1
        let kb=byte*1024
        let mb=kb*1024
        let gb=mb*1024
        let tb=gb*1024

        document.write(`${byte} (байт) <br> ${kb} (Кб) <br> ${mb} (Мб) <br> ${gb} (Гб) <br> ${gb*10} (10 Гб) <br> ${tb} (Тб) <br> ${tb/1024} (Кб в Тб) <br>`)
    }
// 
// 
// 
document.write(`<br><b>37</b><br>`)
    {
        let r=7
        const PI=3.14
        let s=PI*r**2

        document.write(s,'<br>')
    }

    {
        let a=6
        let s=a**2

        document.write(s,'<br>')
    }

    {
        let a=6
        let b=4.5
        let s=a*b

        document.write(s,'<br>')
    }

    {
        let a=6
        let b=4.5
        let p=2*(a+b)

        document.write(p,'<br>')        
    }

    {
        let tc=20
        let tf=(tc*9/5)+32

        document.write(tf,'<br>')
    }

    {
        let tf=68
        let tc=(tf-32)*5/9

        document.write(tc,'<br>','<br>') 
    }