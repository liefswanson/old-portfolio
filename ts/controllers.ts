/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="portfolio.d.ts"/>
/// <reference path="app.ts"/>

module portfolio.controllers {
	'use strict';

	export class GalleryCtrl {
		public static $inject = ['$scope']

		constructor (private $scope: portfolio.IGalleryScope) {
			$scope.cards = [
				{
					"id": "fruity-tetris",
					"title": "Fruity Tetris: Food and Bricks collide",
					"thumbUrl": "http://placehold.it/400",
					"detailsUrl": "details/fruity-tetris.json",
					"tags": [
						
					]
				}
			];

			
		}
	}
}
