/// <reference path="angularjs/angular.d.ts"/>
/// <reference path="angularjs/angular-route.d.ts"/>
/// <reference path="controllers.ts"/>

'use strict'

module portfolio {
	'use strict';

	var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

	portfolioApp.config([<any>'$routeProvider', ($routeProvider: ng.route.IRouteProvider)=>{
		$routeProvider
			.when('/gallery',
				  <ng.route.IRoute> {
					  templateUrl:'views/gallery.html',
					  controller: controllers.GalleryCtrl
				  })
			.otherwise(<ng.route.IRoute>{redirectTo:'/gallery'});
	}])
}
