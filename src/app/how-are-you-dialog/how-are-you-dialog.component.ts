import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-how-are-you-dialog',
  templateUrl: './how-are-you-dialog.component.html',
  styleUrls: ['./how-are-you-dialog.component.scss']
})
export class HowAreYouDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, nb: number}){}
}
