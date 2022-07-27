import sendRequest from './send-request';

const BASE_URL = '/api/posts'

export function getPosts(userId) {
    let url = userId ? `${BASE_URL}?userId=${userId}` : BASE_URL;
    return sendRequest(url)
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function createPost(postD) {
    return sendRequest(`${BASE_URL}`, 'POST', postD)
}

export function updatePost(postD) {
    return sendRequest(`${BASE_URL}/${postD._id}`, 'PUT', postD)
}

export function deletePost(postD) {
    return sendRequest(`${BASE_URL}/${postD._id}`, 'DELETE', postD)
}

export function likePost(postD) {
    return sendRequest(`${BASE_URL}/${postD._id}/like`, 'PUT', postD)
}