import axios from 'axios'
axios.defaults.timeout = 5000
console.log(process)
axios.defaults.baseURL = 'http://192.168.7.3:8000/api'

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('Authorization')
  if (token !== null) config.headers['Authorization'] = 'Bearer ' + token
  return config
}, function (error) {
  console.log('axios异常')
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
  if (res.status !== 200) {
    return Promise.resolve(res.data)
  }
  return res.data
}, function (error) {
  console.log('网络不可达')
  return Promise.reject(error)
})

export function get (url, query) {
  return new Promise(function (resolve, reject) {
    axios.get(url, {
      params: query
    }).then(function (res) {
      resolve(res)
    }, function (err) {
      reject(err)
    }).catch(function (err) {
      reject(err)
    })
  })
}

export function post (url, params) {
  return new Promise(function (resolve, reject) {
    axios.post(url, params).then(function (res) {
      resolve(res)
    }, function (err) {
      reject(err)
    }).catch(function (err) {
      reject(err)
    })
  })
}

export default {post, get}
