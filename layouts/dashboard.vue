<template>
	<v-app dark>
		<v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
			<v-list>
				<v-list-item
					v-for="(link, i) in links"
					:key="i"
					:to="link.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="link.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />

			<v-toolbar-title v-text="brandName" />

			<v-spacer />

			<v-btn icon>
				<v-icon>mdi-account</v-icon>
			</v-btn>

			<v-btn icon @click="$auth.logout()">
				<v-icon>mdi-logout</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>

		<AppFooter :brand-name="brandName" />
	</v-app>
</template>

<script>
import appConfig from '~~/config/appConfig'

export default {
	name: 'DefaultLayout',
	data() {
		return {
			clipped: true,
			drawer: false,
			fixed: true,
			links: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/',
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire',
				},
			],
			brandName: appConfig.app.name,
			logoutLoading: false,
		}
	},
}
</script>
