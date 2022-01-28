<template>
    <v-app dark>
        <v-main>
            <v-container fill-height fluid>
                <v-row
                    align="center"
                    justify="center">
                    <Nuxt />
                </v-row>
            </v-container>
        </v-main>

        <AppFooter :fixed='fixed' :brand-name='title' />
    </v-app>
</template>

<script>
import appConfig from '~~/config/appConfig'

export default {
    name: 'DefaultLayout',
    data() {
        return {
            fixed: false,
            title: appConfig.app.name,
        }
    },
}
</script>
