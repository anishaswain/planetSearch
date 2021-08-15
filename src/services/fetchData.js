import axios from "axios"

const url = "http://localhost:3000"

export const fetchFullData = (type) => {
   return axios.get(`${url}/${type}`).then(res=>res.data)
}

export const fetchColors = (type) => {
   return axios.get(`${url}/${type}`).then(res=>res.data)
}

export const fetchShapes = (type) => {
   return axios.get(`${url}/${type}`).then(res=>res.data)
}

export const fetchSizes = (type) => {
   return axios.get(`${url}/${type}`).then(res=>res.data)
}


export const fetchFilteredData = (type) =>{
   return ["abcd"]
}
