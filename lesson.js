
const USERS_URL = `https://jsonplaceholder.typicode.com/uses`

const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`
// fetch(USERS_URL)
//     .then((response) => response.json())
//     .then((users) => {
//         const firstUserId = users[0]?.id
//         fetch(`${TODOS_URL}?userId=${firstUserId}`)
//             .then((response) => response.json())
//             .then((todos) => {
//                 console.log('todos', todos)
//             })
//             .catch((error) => {
//                 console.log('error', error)
//             })
//     })
// .catch((error) => {
//     console.log('error', error)
// })


const getTodosWithUserData = async () => { //asynchronize
    try {
        const response = await fetch(USERS_URL)
        if (!response.ok) {
            throw new Error('ошибка в получении о данных пользователях')
        }
        const users = await response.json()
        console.log('users', users)
        const firstUserId = users[0]?.id
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
        if (!todosResponse.ok) {
            throw new Error('Ошибка в получении данных о задачах')
        }
        const todos = await todosResponse.json()
        console.log('todos', todos)
    } catch (error) {
        console.log('error', error)
    } finally {
        console.log('finally')
    }

}
const promise = getTodosWithUserData()
console.log('promise', promise)