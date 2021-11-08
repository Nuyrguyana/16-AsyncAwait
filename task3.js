const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'
let stringHTML = `<ul class="data-container">
<span id="loader" hidden>Loading...</span>
</ul>`
document.body.innerHTML = stringHTML

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}
const sumHTML = document.querySelector('.data-container')
const renderAlbums = async () => {
    toggleLoader()
    try {
        const response = await fetch(ALBUM_URL)
        const albums = await response.json()
        await albums.forEach((album) => {
            const li = document.createElement('li')
            li.textContent = album.title
            document.body.append(li)
        })
        console.log('albums', albums)
    } catch (error) {
        sumHTML.textContent = 'Произошла ошибка в получении данных об альбомах...'
        console.log()
    } finally {
        toggleLoader()
    }
}

const promise = renderAlbums()
