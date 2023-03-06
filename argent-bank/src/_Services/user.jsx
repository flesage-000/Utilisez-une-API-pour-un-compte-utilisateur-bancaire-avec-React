export const getLogin = async (identifiers) => {
  const URL_API = "http://localhost:3001/api/v1/user/login";

  const loginResponse = await fetch(URL_API, {
      body: JSON.stringify(identifiers),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        const obj = {
          status: data.status,
          message: data.message,
          token: data.body.token
        }
        return obj;
      } else {
        const obj = {
          status: data.status,
          message: data.message
        }
        return obj;
      }
    });
  return loginResponse;
}

export const getLoginFetch = async (token) => {
  const URL_API = "http://localhost:3001/api/v1/user/profile";

  const loginFetchResponse = await fetch(URL_API, {
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer" + token
      },
      method: "POST"
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.body !== undefined) {
      const obj = {
        status: data.status,
        email: data.body.email,
        firstName: data.body.firstName,
        lastName: data.body.lastName
      }
      return obj;
    } else {
      const obj = {
        status: 0,
        email: "",
        firstName: "",
        lastName: ""
      }
      return obj;
    }
  });

  return loginFetchResponse;
}