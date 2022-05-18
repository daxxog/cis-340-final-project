#!/bin/bash
set -x
ng-openapi-gen -i <(curl https://localhost:5001/swagger/v1/swagger.json --insecure)
