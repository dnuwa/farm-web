import jwtDecode from 'jwt-decode'

export default token => new Promise(resolve => resolve(jwtDecode(token)))
