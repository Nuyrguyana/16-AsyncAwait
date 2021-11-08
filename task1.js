const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
let isLoading = false

const createNewPost = async () => {
    try {
        isLoading = true
        const response = await fetch(POSTS_URL, {
            method: 'POST',
        })
        const photos = await response.json()
        console.log('photos', photos)
    } catch (error) {
        console.log('error', error)
    } finally {
        isLoading = false
    }

}
const promise = createNewPost()
console.log('promise', promise)