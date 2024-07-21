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

import ANH003 from '../../img/A New Hope/Category/battle/ANH003_Blaster_Barrage';
import ANH012 from '../../img/A New Hope/Category/battle/ANH012_It_s_Not_Over_Yet.png';
import ANH017 from '../../img/A New Hope/Category/battle/ANH017_Hold_Em_Off.png';
import ANH024 from '../../img/A New Hope/Category/battle/ANH024_Leia_s_Kiss.png';
import ANH030 from '../../img/A New Hope/Category/battle/ANH030_Most_Desperate_Hour.png';
import ANH031 from '../../img/A New Hope/Category/battle/ANH031_No_Escape.png';
import ANH033 from '../../img/A New Hope/Category/battle/ANH033_Obi-Wan_s_Prowess.png';
import ANH039 from '../../img/A New Hope/Category/battle/ANH039_Protection_of_the_Master.png';
import ANH045 from '../../img/A New Hope/Category/battle/ANH045_Starfighter_s_End.png';
import ANH048 from '../../img/A New Hope/Category/battle/ANH048_Strike_Me_Down.png';
import ANH051 from '../../img/A New Hope/Category/battle/ANH051_Tarkin_s_Stench.png';
import ANH054 from '../../img/A New Hope/Category/battle/ANH054_Tractor_Beam.png';

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
			userProfile: null,
			cartItems: [],
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
					image: ANH028,
					name: 'Luke X-Wing',
					rating: 4.0,
					side: 'Light',
					rarity: 'Rare',
					type: 'Space',
					points: 3,
					price: 14.99
				},
				{
					id: 14,
					image: ANH050,
					name: 'Tantive IV',
					rating: 5.0,
					side: 'Light',
					rarity: 'Rare',
					type: 'Space',
					points: 3,
					price: 49.99
				},
				{
					id: 15,
					image: ANH058,
					name: 'Vader TIE Fighter',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Rare',
					type: 'Space',
					points: 3,
					price: 11.99
				},
				{
					id: 16,
					image: ANH074,
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
					image: ANH100,
					name: 'Devastator',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Uncommon',
					type: 'Space',
					points: 2,
					price: 58.99
				},
				{
					id: 18,
					image: ANH119,
					name: 'Rebel Blockade Runner',
					rating: 4.0,
					side: 'Light',
					rarity: 'Uncommon',
					type: 'Space',
					points: 2,
					price: 9.99
				},
				{
					id: 19,
					image: ANH124,
					name: 'Carrack Cruiser',
					rating: 2.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 1,
					price: 19.99
				},
				{
					id: 20,
					image: ANH132,
					name: 'Imperial Star Destroyer',
					rating: 3.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 1,
					price: 14.99
				},
				{
					id: 21,
					image: ANH149,
					name: 'Rebel Fighter Wing',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 1,
					price: 11.99
				},
				{
					id: 22,
					image: ANH162,
					name: 'TIE Fighter DS-3-12',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 1,
					price: 5.99
				},
				{
					id: 23,
					image: ANH163,
					name: 'TIE Fighter DS-73-3',
					rating: 5.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 1,
					price: 32.99
				},
				{
					id: 24,
					image: ANH164,
					name: 'TIE Fighter DS-55-6',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},

				{
					id: 25,
					image: ANH165,
					name: 'TIE Fighter DS-61-9',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 26,
					image: ANH167,
					name: 'TIE Fighter DS-73-3',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},			
				{
					id: 27,
					image: ANH168,
					name: 'TIE Fighter DS-61-9',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 28,
					image: ANH169,
					name: 'TIE Fighter Squad',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 29,
					image: ANH170,
					name: 'Victory-Class Star Destroyer',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 30,
					image: ANH172,
					name: 'X-Wing Red One',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 31,
					image: ANH173,
					name: 'X-Wing Red Three',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 32,
					image: ANH175,
					name: 'X-Wing Attack Formation',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 33,
					image: ANH176,
					name: 'Y-Wing Gold One',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 34,
					image: ANH177,
					name: 'Y-Wing Gold Squadron',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 35,
					image: ANH178,
					name: 'YT-1300_Transport',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 36,
					image: ANH179,
					name: 'YV-664 Light Freighter',
					rating: 4.0,
					side: 'Neutral',
					rarity: 'Common',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 37,
					image: ANH180,
					name: 'Z-95_Headhunter',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Neutral',
					type: 'Space',
					points: 20,
					price: 49.99
				},
				{
					id: 38,
					image: ANH003,
					name: 'Blaster_Barrage',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Battle',
					points: 20,
					price: 49.99
				},
				{
					id: 39,
					image: ANH012,
					name: 'Its Not Over Yet',
					rating: 4.0,
					side: 'Neutra',
					rarity: 'Rare',
					type: 'Battle',
					points: 20,
					price: 49.99
				},
				{
					id: 40,
					image: ANH017,
					name: 'Hold Em Off',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Battle',
					points: 20,
					price: 49.99
				},
				{
					id: 41,
					image: ANH024,
					name: 'Leias Kiss',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Battle',
					points: 20,
					price: 49.99
				},
				{
					id: 42,
					image: ANH030,
					name: 'Most Desperate Hour',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Battle',
					points: 20,
					price: 49.99
				},
				{
					id: 43,
					image: ANH031,
					name: 'No Escape',
					rating: 4.0,
					side: 'Dark',
					rarity: 'Common',
					type: 'Battle',
					points: 20,
					price: 49.99
				},
				{
					id: 44,
					image: ANH033,
					name: 'Obi-Wans Prowess',
					rating: 4.0,
					side: 'Light',
					rarity: 'Common',
					type: 'Battle',
					points: 20,
					price: 49.99
				},



			],			
			
			message: null

		},
		actions: {
			verifyPassword: async (password) => {
			  const options = {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				  Authorization: `Bearer ${sessionStorage.getItem("token")}`,
				},
				body: JSON.stringify({ password }),
			  };
			  let response = await fetch(`${process.env.BACKEND_URL}api/verify-password`,options);
			  if(!response.ok) {
				console.log("Error verifying password", response);
				return false;
			  } else {
				return true;
			  }
			},
			syncTokenFromSessionStore: () => {
			  const sessionToken = sessionStorage.getItem("token");
			  console.log(
				"Application just loaded. Syncing the sessionStorage token."
			  );
			  if (sessionToken && sessionToken !== "" && sessionToken !== undefined) {
				setStore({ token: sessionToken });
			  }
			},

			signUp: async (user_email, user_password, user_username, first_name, last_name, address) => {
				const options = {
				  method: "POST",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					username: user_username,
					email: user_email,
					password: user_password,
					first_name: first_name,
					last_name: last_name,
					address:address
				  }),
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}api/signup`,
					options
				  );
				  if (!response.ok) {
					const data = await response.json();
					setStore({ signupMessage: data.msg });
					return false;
				  }
		
				  const data = await response.json();
				  setStore({
					signupMessage: data.msg,
					isSignUpSuccessful: response.ok,
				  });
				  return true;
				} catch (error) {
				  console.error("Error signing up:", error);
				  return false;
				}
			  },

			  login: async (userEmail, userPassword) => {
				const options = {
				  method: "POST",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					email: userEmail,
					password: userPassword,
				  }),
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}api/token`,
					options
				  );
				  if (!response.ok) {
					const data = await response.json();
					setStore({ loginMessage: data.msg });
					return {
					  error: {
						status: response.status,
						statusText: response.statusText,
					  },
					};
				  }
		
				  const data = await response.json();
				  sessionStorage.setItem("token", data.access_token);
				  setStore({
					loginMessage: data.msg,
					token: data.access_token,
					isLoginSuccessful: true,
				  });
				  return true;
				} catch (error) {
				  console.error("Error logging in:", error);
				  return false;
				}
			  },

			  logout: () => {
				sessionStorage.removeItem("token");
				setStore({
				  token: null,
				  signupMessage: null,
				  isSignUpSuccessful: false,
				  isLoginSuccessful: false,
				  loginMessage: null,
				  profileInfoMessage: null,
				  profileInfo: [],
				  userProfile: null,
				  message: null,
				});
				console.log("You've logged out.");
			  },
		
			  authenticate: async () => {
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}api/user`,
					{
					  headers: {
						Authorization: "Bearer " + sessionStorage.getItem("token"),
					  },
					}
				  );
				  console.log(sessionStorage.getItem("token"));
				  if (!response.ok) {
					console.log("Failed to authenticate:", response.status);
					return false;
				  }
		
				  const data = await response.json();
				  setStore({ userProfile: data.user });
				  return true;
				} catch (error) {
				  console.error("Error authenticating:", error);
				  return false;
				}
			  },
		
			  updateUserProfile: async (profile) => {
				const store = getStore();
				const options = {
				  method: "PUT",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + store.token,
				  },
				  body: JSON.stringify(profile),
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}api/profile`,
					options
				  );
				  if (!response.ok) {
					const data = await response.json();
					setStore({ profileInfoMessage: data.msg });
					return false;
				  }
		
				  const data = await response.json();
				  setStore({
					profileInfoMessage: data.msg,
					userProfile: data.user,
				  });
				  return true;
				} catch (error) {
				  console.error("Error updating profile:", error);
				  return false;
				}
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
