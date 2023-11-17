import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    FormData: FormGroup;

    constructor( private builder: FormBuilder) { }

  ngOnInit(): void {

      this.FormData = this.builder.group({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
          phone_number: new FormControl('', [Validators.required]),
          msg_subject: new FormControl('', [Validators.required]),
          message: new FormControl('', [Validators.required])


      });

  }

    public sendEmail(e: Event): void {
        e.preventDefault();
        const name = this.FormData.get('name').value;
        const email = this.FormData.get('email').value;
        const phone = this.FormData.get('phone_number').value;
        const subject = this.FormData.get('msg_subject').value;
        const message = this.FormData.get('message').value;
        // tslint:disable-next-line:variable-name
        const all_content = 'name : ' + name + '\n email : ' + email + '\n phone : '
            + phone + '\n subject : ' + subject + '\n message : ' + message;
       // this.toastrService.success('Message Success!', 'Your Message is sent successfully!');

        // this.toastr.success(' Please Check your inbox for activation email activate your account before you Login!'
        //     , ' Sign Up Successful' );
        // emailjs.sendForm('service_63eijic', 'template_uvoty9p', e.target as HTMLFormElement, 'DvsrOzD8wIPliBwWL')
        //     .then((result: EmailJSResponseStatus) => {
        //         console.log(result.text);
        //         console.log('done');
        //     }, (error) => {
        //         console.log(error.text);
        //         console.log('nop');
        //     });
    }


}
