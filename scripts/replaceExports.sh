#!/bin/bash
sed -i -e "s/import type { OperationStore } from '@urql\/svelte';//g" src/_config/typeDefs/graphql-generated.d.ts
sed -i -e 's/export //g' src/_config/typeDefs/graphql-generated.d.ts
sed -i -e 's/OperationStore/import("@urql\/svelte").OperationStore/g' src/_config/typeDefs/graphql-generated.d.ts

echo 'done - file updated'