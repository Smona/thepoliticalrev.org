#!/usr/bin/expect

set timeout 3
spawn ssh -p 21098 -i ~/id_mason.txt thepasgk@server221.web-hosting.com
expect timeout
send "cd public_html\r"
expect timeout
send "rm -r *\r"
expect timeout
send "logout\r"
