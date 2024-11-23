import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/card-stack.js',
            format: 'esm'
        },
        {
            file: 'dist/card-stack.min.js',
            format: 'esm',
            plugins: [terser()]
        }
    ],
    plugins: [
        resolve(),
        commonjs()
    ]
}