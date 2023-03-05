export const getLogin = async (identifiers) => {
  const URL_API = "http://localhost:3001/api/v1/user/login";

  const loginResponse = await fetch(URL_API, {
      body: JSON.stringify(identifiers),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status == 200) {
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