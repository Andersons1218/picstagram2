export default async function sendRequest(url, method = "GET", payload = null) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { "Content-Type": "application/json" };
      
      // Fetch requires data payloads to be stringified
      // and assigned to a body property on the options object
      options.body = JSON.stringify(payload);
    }
    const res = await fetch(url, options);
    console.log(res)
  
    //res.ok will be false if the status code is set to 4xx in the controller action
    // this is if else statement, if res.ok, send res.json(), else throw error
    if (res.ok) return res.json();
    throw new Error("Bad request");
  }