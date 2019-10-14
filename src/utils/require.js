import axios from 'axios'
const request=axios.create({
    url:'index.json',
    timeout:5000
})