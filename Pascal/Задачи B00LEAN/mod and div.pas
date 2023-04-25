program fff;
var a,b,n:integer;
begin
  readln(n);
  a:=n mod 100;
  b:=n div 1000;
  writeln(a);
  write(b);
end.