import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/core/Model/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  username: string = '';
  role = '';
  constructor(private authservice: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.id != null)
      this.authservice.getuserbyid(this.id).subscribe((result: any) => {
        this.username = result.userName;
        this.role = result.role;
        console.log(result);
        console.log(this.username);
        console.log(this.role);


      })
  }
  id: string | null = this.route.snapshot.paramMap.get('id');
  onsubmit() {
    this.authservice
  }
}
