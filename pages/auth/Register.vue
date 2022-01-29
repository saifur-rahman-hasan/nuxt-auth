<template>
	<v-container fill-height fluid>
		<v-row
			align="center"
			justify="center">
			<v-col cols='12' lg='3'>

				<BrandLogo class='text-center mb-8' />

				<v-form :disabled='form.loading' @submit.prevent='userRegister'>
					<v-card flat>

						<v-card-title>Create Account</v-card-title>
						<v-card-subtitle>It's free and always will be.</v-card-subtitle>

						<v-card-text>

							<!-- Field: Name -->
							<v-text-field
								v-model="form.data.name"
								:rules='form.rules.name'
								label='Name'
								outlined
								hint='Write your full name'
							></v-text-field>

							<!-- Field: Email -->
							<v-text-field
								v-model="form.data.email"
								:rules='form.rules.email'
								label='Email'
								outlined
							></v-text-field>

							<!-- Field: Password -->
							<v-text-field
								v-model="form.data.password"
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								:type="showPassword ? 'text' : 'password'"
								:rules='form.rules.password'
								label="Password"
								outlined
								@click:append="showPassword = !showPassword"
							></v-text-field>

							<!-- Button: Submit -->
							<v-btn type='submit' block :disabled='form.loading' :loading='form.loading' large color='primary'>Create</v-btn>
						</v-card-text>

						<v-card-actions class='d-flex flex-column justify-center'>
							Already have account? <nuxt-link to='/auth/login'>Login</nuxt-link>
						</v-card-actions>
					</v-card>
				</v-form>

			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'AuthRegister',
	auth: 'guest',
	data: () => {
		return {
			showPassword: false,
			form: {
				loading: false,
				errors: {},
				rules: {
					name: [
						value => !!value || 'This field is required.'
					],
					email: [
						value => !!value || 'This field is required.'
					],
					password: [
						value => !!value || 'This field is required.'
					]
				},
				data: {
					name: '',
					email: '',
					password: ''
				},
			},
		}
	},

	methods: {
		userRegister(){
			this.loadingStart();

			setTimeout(() => {
				this.loadingStop()
			}, 1500);
		},

		loadingStart() {
			this.form.loading = true
		},

		loadingStop(){
			this.form.loading = false
		}
	}
}
</script>

<style scoped>
</style>
