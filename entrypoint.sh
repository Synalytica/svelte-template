#!/bin/sh
# determine development/production

bun run build

if [ -z ${DEBUG}  ]  ; then
    if [ "$DEBUG" = true ] ; then
        bun run preview
    else
        bun run preview
    fi
else
    bun run preview
fi
