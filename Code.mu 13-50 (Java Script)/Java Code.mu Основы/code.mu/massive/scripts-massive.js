// 
// 
// 
    document.write(`<b>Массивы 1</b><br>`)
    {
        let arr=[1,2,3,4,5,6]
        document.write(arr,'<br>')
        console.log(arr);
    } 

    {
        let arr=['coco', ' koko', ' popo']
        document.write(arr,'<br>')
        console.log(arr);
    }
// 
// 
// 
    document.write(`<br><b>Массивы 2</b><br>`)
    {
        let arr=['jett', 'reyna', 'sage']
        document.write(arr[0]+' - '+arr[1] +' - '+arr[2]+'<br>')
    }

    {
        let arr=[1, 2, 3]
        document.write(arr[0], arr[1], arr[2],'<br>')
    }

    {
        let arr=[1, 2, 3]
        document.write((+arr[0])+(+arr[1])+(+arr[2]),'<br>')
    }

    {
        let arr=['a', 'b', 'c', 'd']
        document.write(arr[0]+'+'+arr[1]+'+'+arr[2]+'+'+arr[3],'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 3</b><br>`)
    {
        let arr=['jett', 'reyna', 'sage']
        document.write(arr.length,'<br>')
    }

    {
        let arr=['jett', 'reyna', 'sage']
        document.write(arr[2],'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 4</b><br>`)
    {
        let arr=['jett', 'reyna', 'sage']
        arr[0]=1
        arr[1]=2
        arr[2]=3
        document.write(arr,'<br>')
    }

    {
        let arr=[1, 2, 3]
        arr[0]=arr[0]+3
        arr[1]=arr[1]+3
        arr[2]=arr[2]+3
        document.write(arr,'<br>')
    }

    {
        let arr=[1, 2, 3]
        arr[0]++
        arr[1]++
        arr[2]++
        document.write(arr,'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 5</b><br>`)
    {
        let arr=[]
        arr[0]=1
        arr[1]=2
        arr[2]=3
        document.write(arr,'<br>')
    }

    {
        let arr=[1, 2, 3]
        arr[3]=4
        arr[4]=5
        document.write(arr,'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 6</b><br>`)
    {
        let arr = [];
        arr[3] = 'a';
        arr[8] = 'b';
        document.write(arr.length,'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 7</b><br>`)
    {
        let arr=[]
        arr.push(1)
        arr.push(2)
        arr.push(3)
        document.write(arr,'<br>')
    }

    {
        let arr = [1, 2, 3]
        arr.push(4)
        arr.push(5)
        document.write(arr,'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 8</b><br>`)
    {
        let arr=['a', 'b', 'c']
        let key=2
        document.write(arr[key],'<br>')
    }

    {
        let arr = [1, 2, 3, 4, 5]
        let key1=1
        let key2=2
        document.write(arr[key1]+arr[key2],'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 9</b><br>`)
    {
        let arr = ['a', 'b', 'c', 'd', 'e']
        delete arr[3]
        delete arr[2]
        document.write(arr,' - ', arr.length,'<br>')
    }
// 
// 
// 
    document.write(`<br><b>Массивы 10</b><br>`)
    {
        let arr = [1, 2, 3, 4, 5];
        last=arr.length-1
        document.write(arr[last],'<br>');
    }

    {
        let arr = [1, 2, 3, 4, 5];
        document.write(arr[0]+arr[1] + arr[2] + arr[3] + arr[4],'<br>');
    }

    {
        let arr = [1, 2, 3, 4, 5];
        document.write(arr.length,'<br>');
    }

    {
        let arr = [1, 2, 3, 4, 5];
        document.write(arr.length,'<br>');
    }