#!/bin/bash


FILE=$@
SUFFIX=${FILE##*.}

case "$SUFFIX" in
js|JS)
    jslint $FILE;;
css|CSS)
    cssl $FILE;;
esac
