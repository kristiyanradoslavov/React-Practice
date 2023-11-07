const baseUrl = 'http://localhost:3030/jsonstore/users'


export const getAllUsers = async () => {
    const result = await fetch(baseUrl);
    const data = await result.json();

    return Object.values(data)
}