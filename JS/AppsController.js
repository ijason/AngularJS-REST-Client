 	function AppListCtrl($scope, $http, $templateCache) {
 		$scope.listApps = function() {
 			$http({method: 'GET', url: './api.php?action=get_app_list', cache: $templateCache}).
  				success(function(data, status, headers, config) {
    		    	$scope.apps = data;                  //set view model
    		    	$scope.view = './Partials/list.html'; //set to list view
  				}).
  				error(function(data, status, headers, config) {
  					$scope.apps = data || "Request failed";
  					$scope.status = status;
  					$scope.view = './Partials/list.html';
  				});
  		}
  			
  		$scope.showApp = function(id) {
  			$http({method: 'GET', url: './api.php?action=get_app&id=' + id, cache: $templateCache}).
  				success(function(data, status, headers, config) {
  					$scope.appDetail = data;               //set view model
  					$scope.view = './Partials/detail.html'; //set to detail view
  				}).
  				error(function(data, status, headers, config) {
  					$scope.appDetail = data || "Request failed";
  					$scope.status = status;
  					$scope.view = './Partials/detail.html';
  				});
  		}
  		
  		$scope.view = './Partials//list.html'; //set default view
  		$scope.listApps();
 	}
 	AppListCtrl.$inject = ['$scope', '$http', '$templateCache'];