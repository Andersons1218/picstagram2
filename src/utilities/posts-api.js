//import { getToken } from "./users-service";
import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3001/api/posts'

export function getAllPosts() {
    return sendRequest(BASE_URL)
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function createPost(postData) {
    return sendRequest(`${BASE_URL}`, 'POST', postData)
}

export function updatePost(postData) {
    return sendRequest(`${BASE_URL}/${postData._id}`, 'PUT', postData)
}

export function deletePost(postData) {
    return sendRequest(`${BASE_URL}/${postData._id}`, 'DELETE', postData)
}

export function likePost(postData) {
    return sendRequest(`${BASE_URL}/${postData._id}/like`, 'PUT', postData)
}
/*--- Helper Functions ---*/

// async function sendRequest(url, method = "GET", payload = null) {
//     const options = { method };
//     if (payload) {
//       options.headers = { "Content-Type": "application/json" };
//       options.body = JSON.stringify(payload);
//     }
//     // need token to make sure someone is actually logged in
//     const token = getToken();
//     if (token) {
//       // Ensure headers object exists
//       options.headers = options.headers || {};
//       // Add token to an Authorization header
//       // Prefacing with 'Bearer' is recommended in the HTTP specification
//       options.headers.Authorization = `Bearer ${token}`;
//     }
  
//     const res = await fetch(url, options);
//     // res.ok will be false if the status code set to 4xx in the controller action
//     console.log("sending request - recipe-api");
//     if (res.ok) return res.json();
//     console.log(res.json);
//     throw new Error("Did not work. You can fix this.");
//   }