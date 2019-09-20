import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	today = new Date();
  	posts =[
  		{
	  		titre : 'Mon premier post', 
	  		content: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', 
	  		coeurs: 0, 
	  		dateCrea: this.today
  		}, 
  		{
  			titre: 'Un autre post', 
  			content: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', 
  			coeurs: 0, 
  			dateCrea : this.today
  		}, 
  		{
  			titre: 'Dernier post', 
  			content: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', 
  			coeurs: 0, 
  			dateCrea: this.today
  		}
  	];
}
