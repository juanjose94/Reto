module.exports = apiService;

function apiService($resource) {
  var url = 'http://localhost:8080/Backend/api/';
  return {
    Data: $resource(url.concat('data/:path'), {path: '@path'}, {
      post: {
        method: 'POST'
      }
    })
  };
}
