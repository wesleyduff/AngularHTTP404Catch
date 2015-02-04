app //gain access to our angular app

/* 
This controller is a base controller and is set
on the <main> DOM tag.
Use this controller for root like scope that is namespaced away from the global namespace.
*/
.controller('MainController', ['$scope', 'firebaseFactory', 'localstorageservice', '$timeout', function($scope, firebaseFactory, localstorageservice, $timeout){
	/*remove this when you are ready to start development
	-also check test/specs/controllerSpecs/boilerplate.js and remove this file. It is there to give you piece of mind when you first clone this repository.
	*/
	$scope.user;
	$scope.hasToken = false;
	$scope.boilerplate = [
		"testing to make sure everything is wired up and ready to go!"
	];

	//setup firebase
	firebaseFactory.init();
	
	
	$scope.init = function(){
		//check for oath
		var token = localstorageservice.deepget().token;
		if(token) {
			$scope.hasToken = true;
		}
	}

	
}]);