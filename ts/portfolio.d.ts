/// <reference path="angularjs/angular.d.ts"/>
declare module portfolio {
	class Card {
		public id: string;
		public title: string;
		public thumbUrl: string;
		public detailsUrl: string;
	}
	
	class Details {
		public title: string;
		public body: string[];
	}

	class About {
		public title: string;
		public summary: string;
	}

	class Contact {
		public email: string;
		public github: string;
		public flickr: string;
	}
}

declare module portfolio {
	interface IGalleryScope extends ng.IScope {
		cards: portfolio.Card[];
	}
	
	interface IDetailsScope extends ng.IScope {
		details: portfolio.Details;
	}

	interface IAboutScope extends ng.IScope {
		about: portfolio.About;
	}

	interface IContactScope extends ng.IScope {
		info: portfolio.Contact;
	}

	interface IDetailsRouteParams extends ng.route.IRouteParamsService {
		cardId: string;
	}
}
