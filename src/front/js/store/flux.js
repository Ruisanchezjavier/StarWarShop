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
      message: null,
    },
    actions: {
      deleteAccount: async () => {
        const options = {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
        let response = await fetch(`${process.env.BACKEND_URL}api/user`, options);
        if(response.status == 200) {
          console.log(response.json())
          return true
        } else {
          return false
        }
      },

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
    },
  };
};

export default getState;