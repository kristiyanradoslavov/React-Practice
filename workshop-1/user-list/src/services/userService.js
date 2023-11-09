const baseUrl = 'http://localhost:3030/jsonstore/users'


export const getAllUsers = async () => {
    const result = await fetch(baseUrl);
    const data = await result.json();

    return Object.values(data)
}


export const addNewUser = async (formData) => {
    const httpHeaders = {
        method: 'POST',
        body: JSON.stringify(formData)
    }
    const response = await fetch(baseUrl, httpHeaders);
    const result = await response.json();

    return result;
}