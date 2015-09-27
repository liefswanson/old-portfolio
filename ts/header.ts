/// <reference path="jquery/jquery.d.ts"/>

module HeaderTS {
	// below are the only two lines you may need to change
	
	// __________________________________________________________________________________________________________

	var duration: number = 350;
	var target:   string = '#header';

	// __________________________________________________________________________________________________________


	var prevScrollPos = $(window).scrollTop();
	var scrollPos = $(window).scrollTop();

	function updateScroll(): void {
		prevScrollPos = scrollPos;
		scrollPos = $(window).scrollTop();
		hidden = '-' + $(target).css('height');
	};

	function scrollingUp(): boolean {
		return scrollPos < prevScrollPos;
	};

	function scrollingDown(): boolean {
		return scrollPos > prevScrollPos;
	};


	var headerHeight = $(target).css('height');
	var shown:  string = '0px';
	var hidden: string = '-' + headerHeight;

	function fractionOfHeight(): number {
		var numerator:   string = $(target).css('top').replace(/px/,"").replace(/-/,"");
		var denominator: string = headerHeight.replace(/px/,"");
		
		return parseInt(numerator) / parseInt(denominator);
	};

	var hiding:  boolean = false;
	var showing: boolean = false;

	function showHeader(): void {
		if (!showing) {
			hiding = false;
			$(target).stop();

			showing = true;
			$(target).animate(
				{top: shown},
				duration * fractionOfHeight()
			);	
		}
	};

	function hideHeader(): void {
		if (!hiding) {
			showing = false;
			$(target).stop();

			hiding = true;
			$(target).animate(
				{top: hidden},
				duration - duration * fractionOfHeight()
			);
		}
	};

	function headerToggle(): void {
		updateScroll();
		if (scrollingDown()) {
			hideHeader();
		} else if (scrollingUp()) {
			showHeader();
		} 
	};

	function activate(): void {
		$(document).scroll(headerToggle);
		if (scrollPos === 0) {
			$(target).css('top', shown);
		} else {
			$(target).css('top', hidden);
		}
	};

	
	$(document).ready(activate);
}
