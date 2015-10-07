angular.module('kwiki.profile', [])

.factory('ProfileFactory', function ($http, $state, SocketFactory, $window, $rootscope) {

  var getProfileInfo = function(userProfile) {
    return $http.get('/profile/:id', userProfile)
      .then(function(res) {
        return res.data
      })
      .catch(function(err) {
        console.log(err)
      })
  };

  var updateProfileInfo = function(userProfile) {
    return $http.post('/profile/:id', userProfile)
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  return {
    getProfileInfo: getProfileInfo,
    updateProfileInfo: updateProfileInfo
  }
})

.controller('ProfileCtrl', function ($rootScope, $state, $scope, ProfileFactory, AuthFactory) {

  $scope.handleSubmit = function(userProfile) {
    console.log(userProfile)
    ProfileFactory.updateProfileInfo(userProfile)
      .then(function(res) {
      })
      .catch(function(err) {
        console.log(err);
      });
  };

});
