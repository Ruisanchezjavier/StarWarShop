import ANH014 from '../../img/A New Hope/Category/ground/ANH014_Elite_Stormtrooper_Squad.png';
import ANH023 from '../../img/A New Hope/Category/ground/ANH023_Krayt_Dragon.png';
import ANH027 from '../../img/A New Hope/Category/ground/ANH027_Luke_s_Speeder_A.png';
import ANH060 from '../../img/A New Hope/Category/ground/ANH060_Yavin_4_Hangar_Base.png';
import ANH066 from '../../img/A New Hope/Category/ground/ANH066_Tatooine_Sandcrawler.png';
import ANH068 from '../../img/A New Hope/Category/ground/ANH068_Death_Star_Hangar_Bay.png';
import ANH081 from '../../img/A New Hope/Category/ground/ANH081_Imperial_Control_Station.png';
import ANH086 from '../../img/A New Hope/Category/ground/ANH086_Jawa_Collection_Team.png';
import ANH094 from '../../img/A New Hope/Category/ground/ANH094_Mounted_Stormtrooper.png';
import ANH102 from '../../img/A New Hope/Category/ground/ANH102_Rebel_Control_Post.png';
import ANH116 from '../../img/A New Hope/Category/ground/ANH116_Tatooine_Speeder.png';
import ANH126 from '../../img/A New Hope/Category/ground/ANH126_Death_Star_Cannon_Tower.png';
import ANH028 from '../../img/A New Hope/Category/space/ANH028_Luke_s_X-wing_A.png';
import ANH050 from '../../img/A New Hope/Category/space/ANH050_Tantive_IV_A.png';
import ANH058 from '../../img/A New Hope/Category/space/ANH058_Vader_s_TIE_Fighter_A.png';
import ANH074 from '../../img/A New Hope/Category/space/ANH074_Devastator_A.png';
import ANH100 from '../../img/A New Hope/Category/space/ANH100_Rebel_Blockade_Runner.png';
import ANH119 from '../../img/A New Hope/Category/space/ANH119_Vader_s_TIE_Fighter_B.png';
import ANH124 from '../../img/A New Hope/Category/space/ANH124_Carrack_Cruiser.png';
import ANH132 from '../../img/A New Hope/Category/space/ANH132_Imperial_Star_Destroyer.png';
import ANH149 from '../../img/A New Hope/Category/space/ANH149_Rebel_Fighter_Wing.png';
import ANH162 from '../../img/A New Hope/Category/space/ANH162_TIE_Fighter_DS-3-12.png';
import ANH163 from '../../img/A New Hope/Category/space/ANH163_TIE_Fighter_DS-73-3.png';
import ANH164 from '../../img/A New Hope/Category/space/ANH164_TIE_Fighter_DS-55-6.png';
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

			cards: [
				{
					id: 1,
					image: ANH014,
					name: 'Elite Stormtrooper Squad',
					rating: 4.5,
					side: 'Dark',
					rarity: 'Rare',
					type: 'Ground',
					points: 3,
					price: 12.99
				},
				{
					id: 2,
					image: ANH023,
					name: 'Krayt Dragon',
					rating: 4.0,
					side: 'Neutral',
					rarity: 'Rare',
					type: 'Ground',
					points: 3,
					price: 9.99
				},
				{
					id: 3,
					image: ANH027,
					name: 'Luke Speeder',
					rating: 4.0,
					side: 'Light',
					rarity: 'Rare',
					type: 'Ground',
					points: 3,
					price: 49.99
				},
				{
					id: 4,
					image: ANH060,
					name: 'Yavin 4 Hangar Base',
					rating: 4.0,
					side: 'Light',
					rarity: 'Rare',
					type: 'Ground',
					points: 3,
					price: 17.99
				},
				{
					id: 5,
					image: ANH066,
					name: 'Tatooine Sandcrawler',
					rating: 2.0,
					side: 'Neutral',
					rarity: 'Uncommon',
					type: 'Ground',
					points: 2,
					price: 5.99
				},
				{
					id: 6,
					image: ANH068,
					name: 'Death Star Hangar Bay',
					rating: 3.0,
					side: 'Dark',
					rarity: 'Uncommon',
					type: 'Ground',
					points: 2,
					price: 9.99
				},
				{
					id: 7,
					image: ANH081,
					name: 'Imperial Control Station',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Uncommon',
					type: 'Ground',
					points: 2,
					price: 29.99
				},
				{
					id: 8,
					image: ANH086,
					name: 'Jawa Collection Team',
					rating: 1.0,
					side: 'Neutral',
					rarity: 'Common',
					type: 'Ground',
					points: 2,
					price: 19.99
				},
				{
					id: 9,
					image: ANH094,
					name: 'Mounted Stormtrooper',
					rating: 2.0,
					side: 'Dark',
					rarity: 'Uncommon',
					type: 'Ground',
					points: 2,
					price: 11.99
				},
				{
					id: 10,
					image: ANH102,
					name: 'Rebel Control Post',
					rating: 3.0,
					side: 'Light',
					rarity: 'Uncommon',
					type: 'Ground',
					points: 20,
					price: 49.99
				},
				{
					id: 11,
					image: ANH116,
					name: 'Tatooine Speeder',
					rating: 4.0,
					side: 'Neutral',
					rarity: 'Uncommon',
					type: 'Ground',
					points: 2,
					price: 19.99
				},
				{
					id: 12,
					image: ANH126,
					name: 'Death Star Cannon Tower',
					rating: 2.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Ground',
					points: 1,
					price: 4.99
				},
				{
					id: 13,
					image: 'ANH028',
					name: 'Elite Stormtrooper Squad',
					rating: 4.5,
					side: 'Light',
					rarity: 'Rare',
					type: 'Space',
					points: 10,
					price: 99.99
				},
				{
					id: 14,
					image: 'ANH050',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 15,
					image: 'ANH058',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 16,
					image: 'ANH074',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 17,
					image: 'ANH100',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 18,
					image: 'ANH119',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 19,
					image: 'ANH124',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 20,
					image: 'ANH132',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 21,
					image: 'ANH149',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 22,
					image: 'ANH162',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 23,
					image: 'ANH163',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 24,
					image: 'ANH164',
					name: 'Product 2',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				}
			],
			cartItems: [],
			message: null

		},
		actions: {
			syncTokenFromSessionStore: () => {
				const sessionToken = sessionStorage.getItem('token');
				console.log("Application just loaded. Syncing the sessionStorage token.")
				if (sessionToken && sessionToken !== "" && sessionToken !== undefined) {
					setStore({ token: sessionToken })
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

			login: async (userEmail, userPassword,) => {
				const options = {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: userEmail,
						password: userPassword
					}),
				}


				const response = await fetch(`${process.env.BACKEND_URL}api/token`, options);

				if (!response.ok) {
					const data = await response.json();
					setStore({ loginMessage: data.msg });
					return { error: { status: response.status, statusText: response.statusText } };
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

			addToCart: (card) => {
				let store = getStore()
				store.cartItems.push(card)
				setStore(store)
				return true
			},
			removeFromCart: (index) => {
				let store = getStore()
				console.log(store)
				let newCartItems = store.cartItems.filter((item,idx) => idx != index)
				console.log(newCartItems)
				setStore({ cartItems: newCartItems })
			},
			clearCart: () => {
				let store = getStore()
				setStore({ cartItems: [] })
			}



		}
	};
};

export default getState;
