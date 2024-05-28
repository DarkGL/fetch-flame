# undici-performance-research

This repository aims to help people interested in performance understand how [undici](https://github.com/nodejs/undici) works and how to improve it.

I'm open to any contribution, feel free to open an issue , pull request, discussion or contact me on twitter [@DarkGL_](https://x.com/darkgl_)

## Benchmarking

All scripts are available in the `package.json` scripts.

### `server`

`node ./src/server.js`

### `fetch`

#### Clinic

`clinic doctor --name doctor.html -- node ./src/bench.js`

#### Clinic Flame

`clinic flame -name flame.html -- node ./src/bench.js`

#### Clinic Heap Profiler

`clinic -name heapprofiler.html heapprofiler -- node ./src/bench.js`

#### Dexnode

`dexnode ./src/bench.js`

#### 0x

`0x --quiet -- node ./src/bench.js`

### `request`

#### Clinic request

`clinic doctor --name doctor.html -- node ./src/bench-request.js`

#### Clinic Flame request

`clinic flame -name flame.html -- node ./src/bench-request.js`

#### Clinic Heap Profiler request

`clinic -name heapprofiler.html heapprofiler -- node ./src/bench-request.js`

#### Dexnode request

`dexnode ./src/bench-request.js`

#### 0x request

`0x --quiet -- node ./src/bench-request.js`

## Dexnode output

For analyzing dexnode output, I would recommend using [deoptexplorer-vscode](https://github.com/microsoft/deoptexplorer-vscode)

## Recommended reading

- [Profiling Node.js Applications](https://nodejs.org/en/learn/getting-started/profiling)
- [Flame Graphs](https://nodejs.org/en/learn/diagnostics/flame-graphs#flame-graphs)
- [Performance measurement APIs](https://nodejs.org/docs/latest/api/perf_hooks.html)
- [V8 internals for JS developers](https://youtu.be/5UZzT_hgsl0?list=PLlIlO186Nn96dlpD431cTdMw6P4JCmLzB)
- [V8 function optimization](https://erdem.pl/2019/08/v-8-function-optimization)
- [Overhead of Deoptimization Checks in the V8 JavaScript Engine](https://masc.soe.ucsc.edu/docs/iiswc16.pdf)
- [deoptimize-reason.h](https://github.com/v8/v8/blob/main/src/deoptimizer/deoptimize-reason.h)
- [Fast properties in V8](https://v8.dev/blog/fast-properties)
