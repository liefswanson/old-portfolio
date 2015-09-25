/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="angularjs/angular-route.d.ts"/>
var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('CardListCtrl', function ($scope) {
	$scope.cards = [
		{
			"id": "fruity-tetris",
			"title": "Fruity Tetris: Food and Bricks collide",
			"thumbUrl": "https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400",
			"detailsUrl": "details/fruity-tetris.json",
			"tags": [
				
			]
		}
	];	
});

// module portfolio {
// 	'use strict';


// 	// portfolioApp.config([<any>'$routeProvider', ($route:ng.IRouteProvider)=>{
// 	// 	$routeProvider
// 	// 		.when('/gallery', <ng.IRoute>{templateUrl:'partials/gallery.html'})
// 	// 		.otherwise(<ng.IRoute>{redirectTo:'/gallery'});
// 	// }])
// }
