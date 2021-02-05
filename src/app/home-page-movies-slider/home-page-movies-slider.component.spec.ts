import { TestBed, inject } from '@angular/core/testing';

import { HomePageMoviesSliderComponent } from './home-page-movies-slider.component';

describe('a home-page-movies-slider component', () => {
	let component: HomePageMoviesSliderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HomePageMoviesSliderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HomePageMoviesSliderComponent], (HomePageMoviesSliderComponent) => {
		component = HomePageMoviesSliderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});