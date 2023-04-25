program bull_3;
var a,b,c:real;
begin
  write('Введите a = '); readln(a);
  write('Введите b = '); readln(b);
  write('Введите c = '); readln(c);  
  if (a<b)and(b<c) then writeln('Число ',b,' находится между числами ',a,' и ',c)
    else if (a<c)and(c<b) then writeln('Число ',c,' находится между числами ',a,' и ',b)
      else if (b<a)and(a<c) then writeln('Число ',a,' находится между числами ',b,' и ',c)
        else if (b<c)and(c<a) then writeln('Число ',c,' находится между числами ',b,' и ',a)
          else if (c<a)and(a<b) then writeln('Число ',a,' находится между числами ',c,' и ',b)
            else if (c<b)and(b<a) then writeln('Число ',b,' находится между числами ',c,' и ',a)
              else writeln('Неизвестное число');
end.