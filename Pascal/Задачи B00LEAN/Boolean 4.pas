program bulleaning;
var a,b:integer;
begin
  write('Введите a = '); readln(a);
  write('Введите b = '); readln(b);
  if (a mod 2=1)and(b mod 2=1) then writeln('Оба числа ',a,' и ',b,' нечётные')
    else if (a mod 2=1)or(b mod 2=1) then writeln('Ровно одно из чисел ',a,' и ',b,' нечётное')
  else writeln('Оба числа чётные');
end.