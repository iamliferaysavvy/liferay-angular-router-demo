import { Component } from "@angular/core";
import LiferayParams from '../types/LiferayParams'
import { Router } from "@angular/router";

declare const Liferay: any;

@Component({
  templateUrl: "/o/angular-router-demo/app/app.component.html",
  styleUrls: ["/o/angular-router-demo/app.component.css"]
})
export class AppComponent {
	params: LiferayParams;
	labels: any;

	constructor(private router: Router) {
		this.labels = {        
			
			configuration: Liferay.Language.get('configuration'),
			portletNamespace: Liferay.Language.get('portlet-namespace'),
        	contextPath: Liferay.Language.get('context-path'),
			portletElementId: Liferay.Language.get('portlet-element-id'),
		}
	}
	ngOnInit() {
			var urlPart = window.location.href;
			console.log("=======urlPart============="+urlPart);
			var navURL = '/products';
			var index = urlPart.indexOf( "#" ); 
			console.log("indexOf found # :" + index );
			console.log("====================");
			if (index != -1 ) { 
				navURL = urlPart.substring(index+1,urlPart.length); 
				console.log("===================="+navURL);
			}
			this.router.navigateByUrl(navURL).then(e => {
			  if (e) {
				console.log("Navigation is successful!");
			  } else {
				console.log("Navigation has failed!");
			  }
			});
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}

}


/*
import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
	templateUrl: '/o/employee-demo/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	labels: any;

	constructor() {
		this.labels = {        
			
			configuration: Liferay.Language.get('configuration'),
			portletNamespace: Liferay.Language.get('portlet-namespace'),
        	contextPath: Liferay.Language.get('context-path'),
			portletElementId: Liferay.Language.get('portlet-element-id'),
			portletChildId: 'employee-view-id'
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}

}
*/
