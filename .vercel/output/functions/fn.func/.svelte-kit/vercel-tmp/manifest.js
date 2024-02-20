export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.jpeg","10.png","11.png","13.png","14.png","15.png","16.png","17.png","2.jpeg","3.jpeg","4.jpeg","5.webp","6.jpeg","7.png","7.webp","8.jpeg","8.webp","9.png","9.webp","favicon.png","header.jpeg","logo.jpeg","product.jpeg"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.iA9pWD10.js","app":"_app/immutable/entry/app.6LxZVtpl.js","imports":["_app/immutable/entry/start.iA9pWD10.js","_app/immutable/chunks/entry.nH-r-60l.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/entry/app.6LxZVtpl.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.mhvAXJXJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
