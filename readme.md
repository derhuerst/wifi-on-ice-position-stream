# wifi-on-ice-position-stream

**A stream of [ICE](https://en.wikipedia.org/wiki/Intercity-Express) positions, taken from the on-board WiFi.**

[![npm version](https://img.shields.io/npm/v/wifi-on-ice-position-stream.svg)](https://www.npmjs.com/package/wifi-on-ice-position-stream)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/wifi-on-ice-position-stream.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installation

```shell
npm install wifi-on-ice-position-stream
```


## Usage

```js
const createStream = require('wifi-on-ice-position-stream')

const positions = createStream()
positions.once('data', (position) => {
	console.log(position)
	positions.destroy()
})
```

`createStream()` returns a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) in [object mode](https://nodejs.org/api/stream.html#stream_object_mode).

Each position/chunk is in the format of [`wifi-on-ice-portal-client`](https://github.com/derhuerst/wifi-on-ice-portal-client/blob/c64a74611d9d99ad9d43fd4c8f3b44f8830ec72f/readme.md#usage) with an additional `clientTime` field:

```js
{
	ok: true,
	speed: 245,
	gpsOk: true,
	latitude: 51.86973533333333,
	longitude: 9.989614166666666,
	servicelevel: 'AVAILABLE_SERVICE',
	wagonClass: 'FIRST',
	serverTime: 1504698041985,
	clientTime: 1504698041872
}
```

You may pass these options to `createStream(opt)`:

- `interval` – How often to fetch the current position from the on-board WiFi, in milliseconds. Default: `5000`
- `endOnTrainChange` – [End](https://nodejs.org/docs/latest-v10.x/api/stream.html#stream_event_end) the stream as soon as the [*Triebzugnummer*](https://www.dybas.de/dybas/index/t/tz.html) reported by the on-board WiFi changes, e.g. when your client accidentally connects to the WiFi of a different train. Default: `true`


## Related

- [*Was das neue Bahn-Wifi über seine Nutzer ausplaudert*](https://hannover.ccc.de/~nexus/dbwifi/)
- [`wifi-on-ice-portal-client`](https://github.com/derhuerst/wifi-on-ice-portal-client) – Query information from the WifiOnICE portal in German ICE trains.
- [`record-ice-movement`](https://github.com/derhuerst/record-ice-movement) – Record the movement of any ICE using the on-board WiFi.
- [`live-cd-wifi-position`](https://github.com/derhuerst/live-cd-wifi-position) – Live vehicle geolocation of České dráhy (Czech Railways) trains taken from the on-board Icomera WiFi system.
- [`cd-wifi-client`](https://github.com/derhuerst/cd-wifi-client) – A client for the onboard WiFi portal of České dráhy (Czech Railways) trains.
- [`sncf-wifi-portal-client`](https://github.com/derhuerst/sncf-wifi-portal-client) – Query information from the SNCF WiFi portal in French TGV trains.
- [`digital-im-regio-portal-client`](https://github.com/derhuerst/digital-im-regio-portal-client) – Query information from the Digital im Regio portal in German Regio trains.
- [`portale-regionale-wifi-position`](https://github.com/derhuerst/portale-regionale-wifi-position) – Query information from the *Portale Regionale* WiFi portal in Trenitalia (Italian Railways) trains.
- [Train-API-Swift-Package](https://github.com/ICE-Buddy/Train-API-Swift-Package) – A Swift Package bundling different Train APIs into one simple Swift interface.
- [`live-icomera-position`](htttps://github.com/derhuerst/live-icomera-position) – Live vehicle geolocation, taken from the on-board Icomera WiFi system.
- [`live-gomedia-position`](htttps://github.com/derhuerst/live-gomedia-position) – Live vehicle geolocation, taken from the GoMedia on-board WiFi entertainment system.


## Contributing

If you have a question or have difficulties using `wifi-on-ice-position-stream`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/wifi-on-ice-position-stream/issues).
