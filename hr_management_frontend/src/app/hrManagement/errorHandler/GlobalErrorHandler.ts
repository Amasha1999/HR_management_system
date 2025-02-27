import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private toastra: ToastrService) {
  }

  handleError(error: Error | HttpErrorResponse)  {
    if (error instanceof HttpErrorResponse) {
      console.log(error.message);
      this.toastra.warning('Please Select the Item', 'Warning', { timeOut: 7000 });
    } else {
      console.log(error.message);
      this.toastra.error('Server Not Connected.', 'Error Message', { timeOut: 7000 });
    }
  }
  systemMessages(title: string, message: string, errorType: string, messageTime: number) {
    if (errorType === 'error') {
      this.toastra.error(message, title, {timeOut: messageTime});
    }
    if (errorType === 'info') {
      this.toastra.info(message, title, {timeOut: messageTime});
    }
    if (errorType === 'warning') {
      this.toastra.warning(message, title, {timeOut: messageTime});
    }
    if (errorType === 'success') {
      this.toastra.success(message, title, {timeOut: messageTime});
    }
    if (errorType === 'show') {
      this.toastra.show(message, title, {timeOut: messageTime});
    }

  }


}
