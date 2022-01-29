export default {
	redirect: {
		login: '/auth/login',
		logout: '/auth/login',
		callback: '/auth/login/callback',
		home: '/',
	},

	strategies: {
		laravelJWT: {
			provider: 'laravel/jwt',
			url: 'http://lumen-jwt-auth.test',
		},
	},
}
