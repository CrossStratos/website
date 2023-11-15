#!/bin/bash

dir=certs

mkdir -p $dir

openssl genrsa -out $dir/website.key 2048
openssl ecparam -genkey -name secp384r1 -out $dir/website.key
openssl req -new -x509 -sha256 -key $dir/website.key -out $dir/website.crt -days 3650