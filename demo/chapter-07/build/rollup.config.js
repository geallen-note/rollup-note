const path = require('path');
const babel = require('@rollup/plugin-babel');

const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
module.exports = [
    {
        input: resolve('src/index.js'),
        output: {
            file: resolve('dist/index.js'),
            format: 'cjs',  
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    }
]