import { updateUrl } from "./updateUrl"

export const createUrl = (filters) => {
    const mainRoute = "planets"
    let params = "?"
    if (filters) {
        const { colorFilter, sizeFilter, shapeFilter } = filters
        if (colorFilter) {

            colorFilter.map(id => {
                params += `&color=${id}`
            })
        }
        if (sizeFilter) {
            sizeFilter.map(id => {
                params += `&size=${id}`
            })
        }
        if (shapeFilter) {
            shapeFilter.map(id => {
                params += `&shape=${id}`
            })
        }
    }

    console.log(window.location.search)
    updateUrl(params.length > 1 ? mainRoute + params : mainRoute + window.location.search)
    let final = window.location.search ? mainRoute + window.location.search : mainRoute + params

    // const queryParam = window.location.search
    // console.log(queryParam)

    return final
}