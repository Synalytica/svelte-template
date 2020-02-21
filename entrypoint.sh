#!/bin/sh
# determine development/production

npm run-script build

if [ -z ${DEBUG}  ]  ; then
    if [ "$DEBUG" = true ] ; then
        npm run-script serve
    else
        npm run-script serve
    fi
else
    npm run-script serve
fi
