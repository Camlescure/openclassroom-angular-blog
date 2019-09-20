import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	@Input() titre: string;
	@Input() content: string;
	@Input() coeurs: number;
	@Input() dateCrea: any;

  constructor() { }

  ngOnInit() {
  }

  ajoutCoeur(){
  	this.coeurs++;
  }

  enleveCoeur(){
	this.coeurs--;
  }

}
