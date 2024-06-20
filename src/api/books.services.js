import { API_CONSTANTS } from "../utils/constants.js";


export async function getAllBooks(data) {

    if (data) {
        var { title, page } = data;
        console.log(data);

    }
    title = title ? title : '';
    page = page ? page : 0;

    const apiUrl = API_CONSTANTS.BACKEND_BASE_URL + "/api/books/getAllBooks" + `?title=${title}&page=${page}`;


    const response = await fetch(apiUrl, {
        method: API_CONSTANTS.GET,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
}


export async function addNewBook(data) {

    const apiUrl = API_CONSTANTS.BACKEND_BASE_URL + "/api/books/addNewBook";

    const body = JSON.stringify({
        title: data.title,
        author: data.author,
        description: data.description
    });
    console.log(body);
    const response = await fetch(apiUrl, {
        method: API_CONSTANTS.POST,
        headers: {
            "Content-Type": "application/json",
        },
        body: body
    });

    return response.json();

}

export async function updateBook(data) {

    const apiUrl = API_CONSTANTS.BACKEND_BASE_URL + "/api/books/updateBook";

    const body = JSON.stringify({
        id: data.id,
        title: data.title,
        author: data.author,
        description: data.description
    });
    // console.log(body);
    const response = await fetch(apiUrl, {
        method: API_CONSTANTS.PATCH,
        headers: {
            "Content-Type": "application/json",
        },
        body: body
    });

    return response.json();
}

export async function deleteBook(data) {

    const apiUrl = API_CONSTANTS.BACKEND_BASE_URL + "/api/books/deleteBook";

    const body = JSON.stringify({
        id: data.id
    });
    // console.log(body);
    const response = await fetch(apiUrl, {
        method: API_CONSTANTS.DELETE,
        headers: {
            "Content-Type": "application/json",
        },
        body: body
    });
    // console.log(response);
    // console.log(response.json());
    // return response.json();
    const data1 = {};

    return data1;
}

export async function getBookDetails(data) {

    const apiUrl = API_CONSTANTS.BACKEND_BASE_URL + "/api/books/getBookDetails";

    const body = JSON.stringify({
        id: data.id
    });
    // console.log(body);
    const response = await fetch(apiUrl, {
        method: API_CONSTANTS.PATCH,
        headers: {
            "Content-Type": "application/json",
        },
        body: body
    });

    return response.json();
}