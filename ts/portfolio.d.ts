/// <reference path="angularjs/angular.d.ts"/>
declare module portfolio {
	class Card {
		public id: string;
		public title: string;
		public thumbUrl: string;
		public detailsUrl: string;
		public tags: string[];
	}
	
	class Details {
		public title: string;
		public body: string[];
	}
}

declare module portfolio {
	interface ICardListScope extends ng.IScope {
		cards: portfolio.Card[];
	}
	
	interface ICardDetailsScope extends ng.IScope {
		details: portfolio.Details;
	}
}

declare module phonecat.controllers {
	class CardListCtrl {
		private $scope;
		static $inject: string[];
		constructor($scope: portfolio.ICardListScope);
	}
	
	class CardDetailCtrl {
		private $scope;
		static $inject: string[];
		constructor($scope: portfolio.ICardDetailsScope);
	}
}
