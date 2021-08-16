import axios from "axios"
import { endpoints } from "../config/endpoint"

const { url } = endpoints

export const fetchFullData = (type) => {
   return axios.get(`${url}/${type}`).then(res => res.data)
}

export const fetchColors = (type) => {
   return axios.get(`${url}/${type}`).then(res => res.data)
}

export const fetchShapes = (type) => {
   return axios.get(`${url}/${type}`).then(res => res.data)
}

export const fetchSizes = (type) => {
   return axios.get(`${url}/${type}`).then(res => res.data)
}


export const fetchFilteredData = (type) => {
   return ["abcd"]
}
