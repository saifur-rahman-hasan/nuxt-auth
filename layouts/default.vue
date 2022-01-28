<template>
    <v-app dark>
        <v-main>
            <v-container fill-height fluid>
                <v-layout align-center justify-center>
                    <Nuxt />
                </v-layout>
            </v-container>
        </v-main>

        <AppFooter :fixed='fixed' :brand-name='brandName'/>
    </v-app>
</template>

<script>
import appConfig from '~~/config/appConfig'

export default {
    name: 'DefaultLayout',
    data() {
        return {
            fixed: false,
            brandName: appConfig.app.name,
        }
    },
}
</script>
