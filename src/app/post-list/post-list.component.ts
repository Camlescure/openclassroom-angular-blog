import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	postSubscription: Subscription;
	posts: any[];

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.postSubscription = this.postService.postsSubject.subscribe(
      		(posts: any[]) => {
        		this.posts = posts;
      		}
    	);
    	this.postService.emitPostSubject();
	}

	ngOnDestroy() {
    	this.postSubscription.unsubscribe();
  	}

}
