import { Component ,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl,FormBuilder, FormGroup,Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
})
export class HeaderComponent implements OnInit{
  loginForm!:FormGroup;
  logo="../../assets/logos.jpg";
  loginbox:boolean=true;
  loginotppage:boolean=false;
  registercomponent:boolean=false;
  timer!:number;
  // constructor(public dialog: MatDialog,private fb:FormBuilder,public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      mobilenumber:['', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]]
    })
   
  }
  openDialog2(){

this.loginotppage=true;
this.loginbox=false;
for (let i= 0; i < 30; i++) {
  i=this.timer;
  console.log(i);
}
// http://localhost/API/sms-api.php?auth=XXXXX&msisdn=xxxxx&senderid=xxxxxx&message=xxxxx 
//   Parameters 
//   auth=XXX //your auth key
//   message=message // message you want to send //required if type=1
//   msisdn=xxxxx,xxxxxxx,xxxxxx //this is comma separated mobile numbers (max 1000)
//   senderid=your sender id // required
//   countrycode=enter country code // optional
//   type=1 // optional for unicode message
//   }
}
gotoregisterpage(){
  
}
  change(){
    this.loginotppage=false;
    this.loginbox=true;
  }
  verify(){

  }
}

