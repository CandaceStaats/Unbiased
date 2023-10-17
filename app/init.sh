#!/bin/bash

if ! [[ -d  "/node_modules" ]]; then
  npm install
fi

npm install uuid base64url

exec ${@}