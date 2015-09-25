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
	interface IGalleryScope extends ng.IScope {
		cards: portfolio.Card[];
	}
	
	interface IDetailsScope extends ng.IScope {
		details: portfolio.Details;
	}

	interface IDetailsRouteParams extends ng.route.IRouteParamsService {
		cardId: string;
	}
}
