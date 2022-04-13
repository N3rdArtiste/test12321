var fs = require('fs')
var path = require('path')

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace)
}

var jsonPath = path.join(__dirname, '..', 'src', '_config', 'typeDefs', 'graphql-generated.d.ts')

fs.readFile(jsonPath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err)
    }
    var result = replaceAll(data, "import type { OperationStore } from '@urql/svelte';", '')

    result = replaceAll(result, 'export', '')
    result = replaceAll(result, 'OperationStore', 'import("@urql/svelte").OperationStore')

    fs.writeFile(jsonPath, result, 'utf8', function (err) {
        if (err) return console.log(err)
    })
})
