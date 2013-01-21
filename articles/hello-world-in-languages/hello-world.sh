#!/bin/sh

gcc -o c.out "hello-world.c" && ./c.out
gcc -lstdc++ -o cpp.out "hello-world.cpp" && ./cpp.out
clisp "hello-world.lisp"
javac "hello-world.java" && java HelloWorld
node "hello-world.js"
php "hello-world.php"
perl "hello-world.pl"
python "hello-world.py"
ruby "hello-world.rb"
cat "hello-world.sql" | mysql -uroot -p test
