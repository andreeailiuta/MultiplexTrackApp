import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faLock, faPhone, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'text-input',
	templateUrl: 'text-input.component.html',
	styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements OnInit {
	faIcon: IconDefinition;
	@Input() placeholder: string;
	@Input() inputIcon: string;

	ngOnInit() { this.faIcon = this.getIcon(this.inputIcon);}

	 getIcon (iconName: string) {
		 switch (iconName){
			case "faLock":
				return faLock;
			case "faEnvelope":
				return faEnvelope;
			case "faUser":
				return faUser;
			case "faPhone":
				return faPhone;
		 }
	}
}
