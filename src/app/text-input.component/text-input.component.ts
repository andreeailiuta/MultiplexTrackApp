import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faLock, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'text-input',
	templateUrl: 'text-input.component.html',
	styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements OnInit {
	 faIcon :IconDefinition;

	ngOnInit() { this.faIcon = this.getIcon(this.inputIcon);}
		
	@Input() placeholder: string;
	@Input() inputIcon: string;
	

	 getIcon (iconName) {
		if (iconName == "faLock")
		{
			return faLock;
		}
		if (iconName == "faEnvelope")
		{
			return faEnvelope;
		}
		
	}
}	