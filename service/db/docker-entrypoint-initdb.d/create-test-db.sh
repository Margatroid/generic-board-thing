#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE testdb;
  GRANT ALL PRIVILEGES ON DATABASE testdb TO user;
EOSQL