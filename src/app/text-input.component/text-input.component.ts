import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'text-input',
	templateUrl: 'text-input.component.html',
	styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements OnInit {

	ngOnInit() { }
	faEnvelope = faEnvelope;
	faLock = faLock;
	@Input() placeholder: string;
	@Input() inputIcon: string;
}	