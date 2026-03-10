import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PreferencesService } from '../common/service/preferences-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public preferencesService : PreferencesService){}
}
