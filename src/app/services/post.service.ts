import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

@Injectable()
export class PostService{

	today = new Date();
  	posts =[
  		{
  			id : 1,
	  		titre : 'Mon premier post', 
	  		content: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', 
	  		coeurs: 0, 
	  		dateCrea: this.today
  		}, 
  		{
  			id : 2,
  			titre: 'Un autre post', 
  			content: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', 
  			coeurs: 0, 
  			dateCrea : this.today
  		}, 
  		{
  			id : 3,
  			titre: 'Dernier post', 
  			content: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', 
  			coeurs: 0, 
  			dateCrea: this.today
  		}
  	];
	postsSubject = new Subject<any[]>();

	constructor(){

	}

	ajoutCoeur(id){
		const indexPostToAddCoeur = this.posts.findIndex(
			(post1) => {
				if(post1.id === id){
					return true;
				}
			});
		this.posts[indexPostToAddCoeur].coeurs++;
		this.emitPostSubject;
	}

	enleveCoeur(id){
		const indexPostToRemoveCoeur = this.posts.findIndex(
			(post1) => {
				if(post1.id === id){
					return true;
				}
			});
		this.posts[indexPostToRemoveCoeur].coeurs--;
		this.emitPostSubject;
	}

	emitPostSubject(){
		this.postsSubject.next(this.posts.slice());
	}

	addPost(titreNewPost, contentNewPost){
		const idPost = this.posts.length + 1;
		console.log(idPost);
		const newPost = { 
			id: idPost,
			titre: titreNewPost, 
			content: contentNewPost, 
			coeurs: 0, 
			dateCrea: this.today
		}
		this.posts.push(newPost);
		this.emitPostSubject();
	}


	deletePost(id){
		const indexPostToRemove = this.posts.findIndex(
			(post1) => {
				if(post1.id === id){
					return true;
				}
			});
		this.posts.splice(indexPostToRemove, 1);
		this.emitPostSubject();
	}

		
	
}