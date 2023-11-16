import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HowAreYouDialogComponent} from '../how-are-you-dialog/how-are-you-dialog.component';

@Component({
  selector: 'app-play-dialog',
  templateUrl: './play-dialog.component.html',
  styleUrls: ['./play-dialog.component.scss']
})
export class PlayDialogComponent implements OnInit{

  animal!: string;
  name!: string

  @ViewChild('dialog')
  dialogRef!: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogRef,{
      disableClose: true,
      data: {name: this.name??"", nb: 42}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openComponentDialog(): void {
    const dialogRef = this.dialog.open(HowAreYouDialogComponent,{
      disableClose: true,
      data: {name: this.name??"", nb: 42}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {

  }

}
