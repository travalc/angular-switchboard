import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches: object[] =
    [
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      },
      {
        on: false
      }
    ]

    toggleSwitch(idx: number)
    {
      if (!this.switches[idx]["on"])
      {
        this.switches[idx]["on"] = true;
      }
      else
      {
        this.switches[idx]["on"] = false;
      }
    }
}
