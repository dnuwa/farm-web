import jwtDecode from 'jwt-decode'

export default (params, filters = [], pagination = {}, sorts = []) =>
  new Promise(resolve => {
    let query = `?size=${pagination.size}&page=${pagination.page - 1}`

    for (var i = 0; i < params.length; i++) {
      if (params[i] && params[i].key) {
        query += `&${params[i].key}=${params[i].value}`
      }
    }

    for (var i = 0; i < filters.length; i++) {
      if (filters[i].params && filters[i].params.query) {
        query += `&${filters[i].params.query}=${filters[i].value}`
      }
    }

    for (var i = 0; i < sorts.length; i++) {
      if (sorts[i].target) {
        query += `&sort=${sorts[i].target},${sorts[i].direction}`
      }
    }

    resolve(query)
  })
