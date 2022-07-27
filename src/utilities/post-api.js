import sendRequest from './send-request';

const BASE_URL = '/api/posts'

export function getPosts(userId) {
    let url = userId ? `${BASE_URL}?userId=${userId}` : BASE_URL;
    return sendRequest(url)
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