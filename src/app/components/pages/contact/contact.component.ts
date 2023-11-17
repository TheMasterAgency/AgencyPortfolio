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

    constructor( private builder: FormBuilder, private toastrService: ToastrService ) { }

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
        emailjs.sendForm('service_63eijic', 'template_uvoty9p', e.target as HTMLFormElement, 'DvsrOzD8wIPliBwWL')
            .then((result: EmailJSResponseStatus) => {
                this.toastrService.success('Your Message is sent successfully!', 'Message Success!');
            }, (error) => {
                this.toastrService.error('An error occurred, try again later!', 'Error!');
            });
    }



}
