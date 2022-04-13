const ramens = {};

const fetchData = async () => {
    await fetch('http://localhost:3000/ramens/', {    
    })
    .then(res => { return res.json() })
    .then(data => console.log('Data: ',data))
    .catch(err => console.log('Error: ',err))
}

const getAllImages = () => {
    const images = [];
    Object.keys(ramens).forEach(ramen => {
        images.push(ramen.image);
    })
    return images;
}

const getSingleImage = () => {

}

