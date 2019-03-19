#!/bin/bash
if which python > /dev/null 2>&1;
then
    ret=`python -c 'import sys; print("%i" % (sys.hexversion<0x03000000))'`
    if [ $ret -eq 0 ]; then
        python -m SimpleHTTPServer
    else 
        python3 -m http.server
    fi
else
    echo "No Python executable is found."
fi
