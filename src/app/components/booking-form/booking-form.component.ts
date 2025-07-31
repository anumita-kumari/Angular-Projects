import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  bookingForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      noOfTickets: new FormControl('', Validators.required),
      notes: new FormControl(''),
      // bookingDate: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    console.log(this.bookingForm, this.bookingForm.value);
    this.bookingForm.reset();
    const bookingData: Booking = {
      ...this.bookingForm.value,
      bookingDate: new Date().toISOString(),
      eventId: this.activatedRoute.snapshot.params['id'],
    };

    this.eventService.bookEvent(bookingData).subscribe({
      next: (res) => {
        alert('Booking successful!');
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error('Booking failed', err);
      },
    });
  }
  resetForm() {
    this.bookingForm.reset();
  }
}
