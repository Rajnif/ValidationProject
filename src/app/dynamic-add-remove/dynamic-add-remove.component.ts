import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-add-remove',
  templateUrl: './dynamic-add-remove.component.html',
  styleUrls: ['./dynamic-add-remove.component.scss']
})
export class DynamicAddRemoveComponent implements OnInit {
formName : FormGroup;
validationMessage = {
'fullName': {
  'required': 'Full name is required.',
},
'contact' : {
  'required':'Contact is required.',
},
'email' : {
  'required':'email is required.',
},
'phone' : {
  'required':'phone is required.',
}
};
formErrors = {
  'fullName': '',
  'contact' : '',
  'email' : '',
  'phone' : ''
};


  constructor( private fb : FormBuilder) { }

  ngOnInit() {
    this.formName = this.fb.group({
      fullName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)] ],
    contact : ['', Validators.required],
    email : ['', Validators.required],
   phone : ['', Validators.required]
    });
  }

}
