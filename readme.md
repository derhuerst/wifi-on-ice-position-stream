# wifi-on-ice-position-stream

**A stream of [ICE](https://en.wikipedia.org/wiki/Intercity-Express) positions, taken from the on-board WiFi.**

[![npm version](https://img.shields.io/npm/v/wifi-on-ice-position-stream.svg)](https://www.npmjs.com/package/wifi-on-ice-position-stream)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/wifi-on-ice-position-stream.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install wifi-on-ice-position-stream
```


## Usage

```js
const createStream = require('wifi-on-ice-position-stream')

const positions = createSteam()
positions.once('data', (position) => {
	console.log(position)
	positions.destroy()
})
```

`createStream()` returns a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) in [object mode](https://nodejs.org/api/stream.html#stream_object_mode).


## Contributing

If you have a question or have difficulties using `wifi-on-ice-position-stream`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/wifi-on-ice-position-stream/issues).
