import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
  error: any;
  // navigationExtras are only available in constructor.
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
 // optional chaining to same as
 // this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
    this.error = navigation?.extras?.state?.error;
  }

  ngOnInit(): void {
  }

}
