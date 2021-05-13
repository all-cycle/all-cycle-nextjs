/**
 * function to fetch data to server and verify response
 * @param {string} method - POST, GET, PUT, PATCH, DELETE
 * @param {string} url - parameters of server end-point
 * @param {any} data - for sending to server
 * @returns response or throw error
 */
async function fetchData(method, url, data) {
  try {
    let response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    response = await response.json();

    if (response.result) {
      return response.data;
    }

    return new Error();
  } catch (err) {
    throw new Error(err.message);
  }
}

export default fetchData;
