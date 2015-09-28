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
			.when('/about',
				  <ng.route.IRoute> {
					  templateUrl: 'views/about.html',
					  controller: controllers.AboutCtrl
				  })
			.when('/contact',
				  <ng.route.IRoute> {
					  templateUrl: 'views/contact.html',
					  controller: controllers.ContactCtrl
				  })
			.when('/details/:cardId',
				  <ng.route.IRoute>{
					  templateUrl:'views/details.html',
					  controller: controllers.DetailsCtrl
				  })
			.otherwise(<ng.route.IRoute>{redirectTo:'/gallery'});
	}])
}
