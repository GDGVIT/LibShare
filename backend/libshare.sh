#!/bin/bash

trap killgroup SIGINT

killgroup() {
  echo killing...
  kill 0
}

python -m http.server -d libs/ &
uvicorn main:app --reload --port 8080 &
wait
