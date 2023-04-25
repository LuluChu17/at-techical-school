program boo;
var n:integer;
begin
  write('Введите целое четырёхзначное число - '); readln(n);
  if (n<1000)or(n>9999) then writeln('Данное число не является четырёхзначным')
    else if (n mod 10=n div 1000)and(n div 10 mod 10=n div 100 mod 10) then writeln('Данное целое число читается одинаково слева направо и справа налево')
      else writeln('Данное целое число не читается одинаково слева направо и справа налево');
end.