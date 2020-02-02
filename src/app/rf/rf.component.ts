import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.scss']
})
export class RfComponent implements OnInit {
formName : FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    // this.formName = new FormGroup({
    //   fullName : new FormControl(),
    //   email : new FormControl(),
    //   skills : new FormGroup({
    //         skillName: new FormControl(),
    //         experienceYears: new FormControl(),
    //         proficiency: new FormControl()

    //   })
    // })

    this.formName = this.fb.group({
      fullName : [''],
      email : [''],
      skills : this.fb.group({
        skillName : [''],
        experienceYears :[''],
        proficiency:['biginner']
      })
    })
  }
  loadDataClick(): void{
this.formName.patchValue({
  fullName :'rajni farswan',
  email: 'rajni@gmail.com',
  skills:{
    skillName :'angular',
    experienceYears:'4',
    proficiency : 'intermediater'

  }

})
  } 
  onSubmit(): void{
    console.log(this.formName.touched);
    console.log(this.formName.value);
    console.log(this.formName.controls.fullName.touched);
    console.log(this.formName.get('fullName').value);
  }
}
