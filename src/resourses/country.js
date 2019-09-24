const api = 'https://restcountries.eu/rest/v2'

const get = () => fetch(`${api}/all`)
    .then(response => response.json())

const getWithFilter = (field, name) => fetch(`${api}/${field}/${name}`)
    .then(response => response.json())
    .catch(() => [])

const getByName = (field, name) => fetch(`${api}/${field}/${name}?fullText=true`)
    .then(response => response.json())
    .catch(() => [])

export default { get, getWithFilter, getByName }
