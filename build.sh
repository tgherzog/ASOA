#!/bin/bash -x
# This script uses jekyll to build the site manually. It is not
# necessary if hosting with Github pages. You need to replace the
# last argument with the DocumentRoot directory, then run the script
# from the command line

jekyll build -d ~/sites/alliedseabreeze35.org
