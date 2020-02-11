import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.scss']
})
export class RfComponent implements OnInit {
formName : FormGroup;
//fullNameLength = 0;
validationMessage ={
  'fullName' : {
    'required': 'Full name is required.',
    'minlength': ' Full name must be greater then 2 characters.',
    'maxlength': ' Full name must be less then 20 characters.',
  },
  'email' : {
    'required':'email is required.',
  },
  'skillName' :{
    'required': 'Skill name is required.',
  },
  'experienceYears' :{
    'required': 'experience Years is required.',
  },
  'proficiency' :{

    'required': 'proficiency is required.',
  }
};
formErrors = {
  'fullName' : '',
  'email' : '',
  'skillName' :'',
  'experienceYears':'',
  'proficiency' : ''
};

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
      email : ['', Validators.required],
      skills : this.fb.group({
        skillName : ['',Validators.required],
        experienceYears :['',Validators.required],
        proficiency:['',Validators.required]
      })
    });
    // this.formName.get('fullName').valueChanges.subscribe((value: any) => {
    //   this.fullNameLength = value.length;
    // });
    this.formName.valueChanges.subscribe((data) => {
     // console.log(JSON.stringify(value));
     this.logKeyValidationErrors(this.formName);
    });
  }
logKeyValidationErrors(group: FormGroup = this.formName): void{
Object.keys(group.controls).forEach((key: string) => {
const abstractControl = group.get(key);

if( abstractControl instanceof FormGroup){     // to check nested form group

  //abstractControl.disable();     // disable all nested form controls
  this.logKeyValidationErrors(abstractControl);
}
else{
  this.formErrors[key] = ' ';
 // console.log('key : ' + key + 'value : ' + abstractControl.value);
 //abstractControl.disable();     // disable all form controls
  //abstractControl.markAsDirty();  // dirty form control 
if(abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)){

  const message = this.validationMessage[key];
  //console.log(message);
  //console.log(abstractControl.errors)
  for (const errorKey in abstractControl.errors){
    if(errorKey){
      this.formErrors[key] += message[errorKey] + ' ';
    }
  }
}
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
this.logKeyValidationErrors(this.formName);
//console.log(this.formErrors);
  };
  onSubmit(): void{
    // console.log(this.formName.touched);
    // console.log(this.formName.value);
    // console.log(this.formName.controls.fullName.touched);
    // console.log(this.formName.get('fullName').value);
  }
}
