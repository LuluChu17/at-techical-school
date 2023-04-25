// 
// 
// 
    document.write(`<br><b>Строковые ключи объектов в JavaScript</b><br>`)
    {
        let user={
            name:'Chingis',
            surname:'Baiyr',
            patronymic:'Albertovich'
        }
        document.write(user['surname'],' ',user['name'],' ',user['patronymic'])
    }
// 
// 
// 
    document.write(`<br><br><b>Свойства объектов в JavaScript</b><br>`)
    {
        let date={
            year:'2023',
            month:'03',
            day:'23'
        }
        document.write(date.year,'-',date.month,'-',date.day)
    }
// 
// 
// 
    document.write(`<br><br><b>Ограничения на ключи объектов в JavaScript</b><br>`)
    {
        let obj = {
            '1a': 1,
            'b2': 2,
            'c-c': 3,
            'd 4': 4,
            'e5': 5
        }

        document.write(obj['1a']);
        document.write(obj.b2);
        document.write(obj['c-c']);
        document.write(obj['d 4']);
        document.write(obj.e5);

        console.log(obj['1a']);
        console.log(obj.b2);
        console.log(obj['c-c']);
        console.log(obj['d 4']);
        console.log(obj.e5);
    }
// 
// 
// 
    document.write(`<br><br><b>Изменение элементов объектов в JavaScript</b><br>`)
    {
        let obj = {x: 1, y: 2, z: 3};
        obj.x=1**2
        obj.y=2**2
        obj.z=3**2
        document.write(obj.x,' ',obj.y,' ',obj.z)
    }
// 
// 
// 
    document.write(`<br><br><b>Добавление элементов в объекты в JavaScript</b><br>`)
    {
        let obj={

        }
        obj.avatar='Aang'
        obj.katara='Katara'
        obj.sokko='Sokko'
        document.write(obj.avatar,', ',obj.katara,' and ',obj.sokko,' is a friends forever!')
    }
// 
// 
// 
    document.write(`<br><br><b>Неупорядоченность объектов в JavaScript</b><br>`)
    {
        let obj={
            7:23, 
            55:6, 
            6:23
        }
        console.log(obj)
    }
// 
// 
// 
    document.write(`<br><br><b>Массив ключей объекта в JavaScript</b><br>`)
    {
        let obj={
            x: 1, 
            y: 2, 
            z: 3
        }
        let keys=Object.keys(obj)
        console.log(keys)
    }
// 
// 
// 
    document.write(`<br><br><b>Длина объекта в JavaScript</b><br>`)
    {
        let obj = {
            x: 1, 
            y: 2, 
            z: 3
        }
        document.write(Object.keys(obj).length)
    }
// 
// 
// 
    document.write(`<br><br><b>Ключи объектов из переменных в JavaScript</b><br>`)
    {
        let obj = {
            x: 1, 
            y: 2, 
            z: 3
        }
        let key='y'
        document.write(obj[key])
    }
// 
// 
// 
    document.write(`<br><br><b>Ошибка обращения к элементу по ключу в JavaScript</b><br>`)
    {
        let obj = {
            x: 1, 
            y: 2, 
            z: 3
        }
        console.log(obj['x'])
    }

    {
        let obj = {
            x: 1, 
            y: 2, 
            z: 3
        };
        let key = 'x'
        console.log(obj[key])
    }
// 
// 
// 
    document.write(`<br><br><b>Ошибка обращения к свойству объекта в JavaScript</b><br>`)
    {
        let obj = {
            x: 'prop', 
            y: 2, 
            z: 3
        }

        let prop = 'x'
        console.log(obj[prop])
    }

    {
        let obj = {
            x: 1, 
            y: 2, 
            z: 3
        }

        let prop = 'y'
        console.log(obj[prop])
    }
// 
// 
// 
    document.write(`<br><br><b>Вычисляемые свойства в JavaScript</b><br>`)
    {
        let key = 'x';

        let obj = {
            [key+'1']: 1,
            [key+'2']: 2,
            [key+'3']: 3
        };   

        document.write(obj[key+'3']+'<br>')   
    }

    {
        let key='x'

        let obj = {
            [key + '1']: 1,
            [key + '2']: 2,
            [key + '3']: 3
        };

        document.write(obj[key+'1']+'<br>')
    }

    {
        let key1 = 'x';
        let key2 = 'y';
        let key3 = 'z';
        
        let obj = {
            [key1]: 1,
            [key2]: 2,
            [key3]: 3
        };

        document.write(obj[key2])
    }
// 
// 
// 
    document.write(`<br><br><b>Оператор in в JavaScript</b><br>`)
    {
        let obj = {x: 1, y: 2, z: 3};

        console.log('x' in obj);
        console.log('w' in obj);
    }
// 
// 
// 
    document.write(`<br><br><b>Оператор delete в JavaScript</b><br>`)  
    {
        let obj = {x: 1, y: 2, z: 3};
        delete obj.x;

        console.log('x' in obj);
        console.log(obj);
    } 
// 
// 
// 
    document.write(`<br><br><b>Типизация объектов в JavaScript</b><br>`)
    {
        console.log( typeof {x: 1, y: 2, z: 3} );
        console.log( typeof {} );
    }

    {
        let obj = {x: 1, y: 2, z: 3};
        console.log( typeof obj );
        document.write(typeof obj+'<br>')
    }

    {
        let obj = {x: 1, y: 2, z: 3};
        console.log(typeof obj);
        document.write(typeof obj)
    }
// 
// 
// 
    document.write(`<br><br><b>Массивы как объекты в JavaScript</b><br>`)
    {
        console.log( typeof {x: 1, y: 2, z: 3} );

        let arr = [1, 2, 3];
        console.log( typeof arr );
        document.write(typeof arr)
    }
// 
// 
// 
    document.write(`<br><br><b>Отличаем массивы от объектов в JavaScript</b><br>`)
    {
        document.write( Array.isArray([1, 2, 3])+' - массив<br>');
        document.write( Array.isArray({x: 1, y: 2, z: 3})+' - объект');
    }
// 
// 
// 
    document.write(`<br><br><b>Объекты и примитивы в JavaScript</b><br>`)
    {
        let test = {x: 1, y: 2, z: 3};
        console.log(test);
    }
    
    {
        let test = {x: 1, y: 2, z: 3};
        console.log(test.x);
    }

    {
        let test = [1, 2, 3];
        console.log(test);
    }

    {
        let test = [1, 2, 3];
        console.log(test[1]);
    }

    {
        let test1 = [1, 2, 3];
        let test2 = 1;

        console.log(test1);
    }

    {
        let test1 = [1, 2, 3];
        let test2 = 1;

        console.log(test1);
    }
// 
// 
// 
    document.write(`<br><br><b>Передача объектов по ссылке</b><br>`)
    {
        let arr1 = [1, 2, 3];
        let arr2 = arr1;

        arr1[0] = 'a';
        console.log(arr2);
    }

    {
        let arr1 = [1, 2, 3];
        let arr2 = arr1;

        arr1[0] = 'a';
        arr2[1] = 'b';

        console.log(arr1);
    }

    {
        let arr1 = [1, 2, 3];
        let arr2 = arr1;

        arr1[0] = 'a';
        arr2[0] = 'b';

        console.log(arr2);
    }