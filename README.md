# undici-performance-research

This repository aims to help people interested in performance understand how undici works and how to improve it.

I'm open to any contribution, feel free to open an issue , pull request, discussion or contact me on twitter [@DarkGL_](https://x.com/darkgl_).

## Benchmarking

All scripts are available in the `package.json` scripts.

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
