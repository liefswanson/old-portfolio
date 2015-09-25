/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="portfolio.d.ts"/>
/// <reference path="app.ts"/>

module portfolio.controllers {
	'use strict';

	export class GalleryCtrl {
		public static $inject = ['$scope', '$http']

		constructor (private $scope: portfolio.IGalleryScope, $http: ng.IHttpService) {
			$http.get('gallery.json').success(function(data: Card[]) {
				$scope.cards = data;
			});
		}
		
	}
}
