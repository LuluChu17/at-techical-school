program bull_2;
var n:integer;
begin
  writeln('Введите число');
  readln(n);
  if n mod 2=1 then writeln('Число является нечётным')
  else writeln('Число является чётным');
end.