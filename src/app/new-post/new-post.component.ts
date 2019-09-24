import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

	postForm: FormGroup; 

  constructor(private router: Router, private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.postForm = this.formBuilder.group({
  		titre: ['', Validators.required], 
  		content: ['', Validators.required]
   	});
  }

  onSubmit(){
  	const formValue = this.postForm.value;
  	this.postService.addPost(formValue['titre'], formValue['content']);
  	this.router.navigate(['/posts']);
  }

}
