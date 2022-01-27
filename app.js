const searchBtn = $('#get');
const removeBtn = $('#remove');
const board = $('#board');
searchBtn.addEventListener('click', handleClick);
removeBtn.addEventListener('click', removeItem);

async function getGIF (find) {
    const searchQ = { 
        api_key: udo6JyWo06EQPWNhTcB3PZGxalGGoxjS, 
        q: find,
        limit: 1,
        offset: 0,
        rating: g,
        lang: en
    }

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { searchQ }});
    const { data } = response.data;
    return data[0].images.original.url;
}

async function handleClick(e) {
    e.preventDefault();
    let search = document.querySelector('input[name="search"]');
    const url = await getGIF(search.value);

    const picture = document.createElement('div');
    const newGif = document.createElement('img');

    picture.classList.add('gif');
    newGif.classList.add('images');
    newGif.setAttribute('src', url);
    newGif.setAttribute('alt', 'new GIF')
    
    picture.append(newGif);
    board.append(picture);
    
    search.value = '';
}

function removeItem (e) {
    e.preventDefault();
    $('#board').children().remove();
}



