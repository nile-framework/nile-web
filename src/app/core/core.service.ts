import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material'

import { LoadingComponent } from './loading/loading.component';

@Injectable()
export class CoreService {

  constructor(
    public dialog: MdDialog
  ) { }

  displayLoadingDialog(): void {
    console.log('we should be displaying the loading dialog');
    let dialogRef = this.dialog.open(LoadingComponent, {
      id: 'loadingDialog',
      width: '200px',
      disableClose: true
    })
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

}
