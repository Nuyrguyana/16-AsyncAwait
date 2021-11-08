const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const  getTodosById = async (ids) => {
    try {
        const responses = await Promise.all(ids.map((id) => fetch(`${TODOS_URL}/${id}`)))
        const dataResults = await Promise.all(responses.map((data) => data.json()))
        await console.log(dataResults)
    } catch (error) {
        console.log('error', error)
    }
}
const arr = getTodosById([43, 21, 55, 100, 10])
console.log(arr)