import axios from "axios"


export const getLanguage = async () => await axios.get('http://localhost:3000/portfolio')
    .then(res => res.data)
    .catch(err => console.log(err))


