import { Component, OnInit } from '@angular/core';
import 'handlebars';
@Component({
	moduleId: module.id,
	selector: 'angular2-code-generator-app',
	templateUrl: 'angular2-code-generator.component.html',
	styleUrls: ['angular2-code-generator.component.css']
})
export class Angular2CodeGeneratorAppComponent implements OnInit {
	title = 'angular2-code-generator works!';
	params: Array<string> = [];
	inputData = '';
	outputData = '';
	ngOnInit() {

	}

	sampleData() {
		this.params.push('city,state,zip,neighborhood,yearbuilt,sqFootage,markeRent,depositRequired,keyNumber,keyLocation,bedrooms,bathrooms,amenity,appliance,utility');
		this.params.push('City,State,Zip,Neighborhood,yearbuilt,sqfootage,markerent,depositrequired,keynumber,keylocation,bedrooms,bathrooms,amenity,appliance,utility');
		this.inputData = `<ion-item [class.error]="!{{$1}}.valid && {{$1}}.touched">
						    <ion-label>{{$2}}</ion-label>
						    <ion-input ngControl="{{$1}}" type="text"></ion-input>
						</ion-item>`;
	}

	convert() {
		try {
			let tempData = '';
			console.log(this.inputData);
			let lisObj = [];
			for (var i = 0; i < this.params.length; ++i) {
				var pText = this.params[i];
				pText.split(',').forEach((item, index) => {
					if (!lisObj[index]) {
						lisObj[index] = {};
					}
					lisObj[index]["$" + (i + 1)] = item;
				})
			}
			console.dir(lisObj);
			lisObj.forEach((item) => {
				var template = Handlebars.compile(this.inputData);
				tempData += template(item) + "\r\n";
			})

			this.outputData = tempData;
		} catch (error) {
			console.log(error);
			this.outputData = error;
		}
	}

}
