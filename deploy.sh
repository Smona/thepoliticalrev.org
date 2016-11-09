#!/usr/bin/expect

spawn sftp -P 21098 -i .id_gitlab.txt thepasgk@server221.web-hosting.com
# expect "Enter passphrase for key 'id_gitlab.txt':"
# send "p4\$\$w0rd\r"
set timeout 100
expect "sftp>"
send "put -r public_html/\r"
expect "sftp>"
send "bye\r"
