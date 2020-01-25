'use strict'

const {Readable} = require('stream')
const portal = require('wifi-on-ice-portal-client')

const createPositionsStream = (interval = 5 * 1000, closeOnTrainChange = false) => {
	if (
		'number' !== typeof interval ||
		Number.isNaN(interval) ||
		interval <= 0
	) {
		throw new Error('interval must be an integer > 0.')
	}

	const out = new Readable({
		objectMode: true,
		read: () => {}
	})

	let lastTzn = null
	const fetch = () => {
		const t = Date.now()

		portal.status()
		.then((data) => {
			if (data.tzn && lastTzn && closeOnTrainChange && data.tzn !== lastTzn) {
				out.end()
				return;
			}
			lastTzn = data.tzn

			data.clientTime = t
			out.push(data)
		})
		.catch((err) => {
			out.emit('error', err)
		})
	}

	setInterval(fetch, interval)
	return out
}

module.exports = createPositionsStream
