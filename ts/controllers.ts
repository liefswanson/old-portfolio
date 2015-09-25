/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="portfolio.d.ts"/>
/// <reference path="app.ts"/>

module portfolio.controllers {
	'use strict';

	export class GalleryCtrl {
		public static $inject = ['$scope', '$http']

		constructor (private $scope: portfolio.IGalleryScope,
					 private $http: ng.IHttpService) {
			$http.get('gallery.json').success(function(data: Card[]) {
				$scope.cards = data;
			});
		}
		
	}

	export class DetailsCtrl {
		public static $inject = ['$scope', '$http', '$routeParams']

		constructor (private $scope: portfolio.IDetailsScope,
					 private $http: ng.IHttpService,
					 private $routeParams: IDetailsRouteParams) {
			$http.get('details/' + $routeParams.cardId + '.json').success(function(data: Details) {
				$scope.details = data;
			});
		}
		
	}

}
