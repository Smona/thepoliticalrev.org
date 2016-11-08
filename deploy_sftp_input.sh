#!/usr/bin/expect

spawn sftp -P 21098 -i id_gitlab.txt thepasgk@server221.web-hosting.com:public_html
expect "Enter passphrase for key 'id_gitlab.txt':"
send "p4\$\$w0rd\r"
expect ">"
send "put -r public\r"
expect ">"
send "bye\r"
