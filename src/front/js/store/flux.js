const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			signupMessage: null,
			isSignUpSuccessful: false,
			isLoginSuccessful: false,
			loginMessage: null,
			profileInfoMessage: null,
			profileInfo: [],
			message: null			
		
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const sessionToken =sessionStorage.getItem('token');
				console.log("Application just loaded. Syncing the sessionStorage token.")
				if (sessionToken && sessionToken !== "" && sessionToken !== undefined) {
					setStore({token: sessionToken})
				}
			},
			
			signUp: async (user_email, user_password, user_username) => {
				const options = {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: user_username,
						email: user_email,
						password: user_password
					})
				}

				const response = await fetch(`${process.env.BACKEND_URL}api/signup`, options)

				if (!response.ok) {
					const data = await response.json();
					setStore({ signupMessage: data.msg });

					return false
				}

				const data = await response.json();
				setStore({
					signupMessage: data.msg,
					isSignUpSuccessful: response.ok
				})
				return true;
			},

			login: async (user_Email, user_Password) => {
				const options = {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: user_Email,
						password: user_Password
					}),
				}
		
				
					const response = await fetch(`${process.env.BACKEND_URL}api/token`, options);
				
					if (!response.ok) {
						const data = await response.json();
						setStore({loginMessage: data.msg});
					  return {error: {status: response.status, statusText: response.statusText}};
					}
				
					const data = await response.json();
					sessionStorage.setItem("token", data.access_token);
					setStore({ 
						loginMessage: data.msg,
						token: data.access_token,
						isLoginSuccessful: true 
					});
					return data;  
			}, 

			logout: () => {
				sessionStorage.removeItem('token')
				setStore({
					token: null,
					signupMessage: null,
					isSignUpSuccessful: false,
					isLoginSuccessful: false,
					loginMessage: null,
					profileInfoMessage: null,
					profileInfo: [],
				})
				console.log("You've logged out.")
			},

		
		}
	};
};

export default getState;
