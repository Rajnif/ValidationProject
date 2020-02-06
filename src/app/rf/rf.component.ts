import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.scss']
})
export class RfComponent implements OnInit {
formName : FormGroup;
fullNameLength = 0;
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
      fullName : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)] ],
      email : ['', [Validators.required, Validators.email]],
      skills : this.fb.group({
        skillName : [''],
        experienceYears :[''],
        proficiency:['biginner']
      })
    });
    // this.formName.get('fullName').valueChanges.subscribe((value: any) => {
    //   this.fullNameLength = value.length;
    // });
    this.formName.valueChanges.subscribe((value: any) => {
      console.log(JSON.stringify(value));
    });
  }
logKeyObjectPairs(group: FormGroup): void{
Object.keys(group.controls).forEach((key) => {
const abstractControl = group.get(key);
if( abstractControl instanceof FormGroup){     // to check nested form group

  //abstractControl.disable();     // disable all nested form controls
  this.logKeyObjectPairs(abstractControl);
}
else{
 // console.log('key : ' + key + 'value : ' + abstractControl.value);
 //abstractControl.disable();     // disable all form controls
  abstractControl.markAsDirty();  // dirty form control 
}
});

}

  loadDataClick(): void{
// this.formName.patchValue({
//   fullName :'rajni farswan',
//   email: 'rajni@gmail.com',
//   skills:{
//     skillName :'angular',
//     experienceYears:'4',
//     proficiency : 'intermediater'
//   }
// })
this.logKeyObjectPairs(this.formName);
  };
  onSubmit(): void{
    console.log(this.formName.touched);
    console.log(this.formName.value);
    console.log(this.formName.controls.fullName.touched);
    console.log(this.formName.get('fullName').value);
  }
}
