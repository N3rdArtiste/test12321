#!/bin/bash
sed -i -e 's/export //g' src/_config/typeDefs/graphql-generated.d.ts

echo 'done - file updated'