import axios from 'axios'

// this file gives back a connector
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}

