/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="angularjs/angular-route.d.ts"/>
/// <reference path="controllers.ts"/>

module portfolio {
	'use strict';

	var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

	portfolioApp.config([<any>'$routeProvider', ($routeProvider: ng.route.IRouteProvider)=>{
		$routeProvider
			.when('/gallery',
				  <ng.route.IRoute> {
					  templateUrl:'views/gallery.html',
					  controller: controllers.GalleryCtrl
				  })
			.when('/details/:cardId',
				  <ng.route.IRoute>{
					  templateUrl:'views/details.html',
					  controller: controllers.DetailsCtrl
				  })
			.otherwise(<ng.route.IRoute>{redirectTo:'/gallery'});
	}])
}
