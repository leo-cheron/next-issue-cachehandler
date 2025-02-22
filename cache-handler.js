const cache = new Map()

module.exports = class CacheHandler {
	constructor(options) {
		this.options = options
	}

	async get(key) {
		console.log('cache-handler.js GET ---', key)
		return cache.get(key)
	}

	async set(key, data, ctx) {
		console.log('cache-handler.js SET ---', key, ctx)
		cache.set(key, {
			value: data,
			lastModified: Date.now(),
			tags: ctx.tags,
		})
	}

	async revalidateTag(tags) {
		console.log('cache-handler.js REVALIDATE ---', tags)
		const _tags = [tags].flat()
		for (const [key, value] of cache) {
			if (value.tags?.some((tag) => _tags.includes(tag))) {
				cache.delete(key)
			}
		}
	}
}
