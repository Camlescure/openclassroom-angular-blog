import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() id: number;
	@Input() titre: string;
	@Input() content: string;
	@Input() coeurs: number;
	@Input() dateCrea: any;



  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  ajoutCoeur(id){
  	this.postService.ajoutCoeur(id);
  }

  enleveCoeur(id){
  	this.postService.enleveCoeur(id);
  }

  deletePost(id){
    this.postService.deletePost(id);
  }

}
