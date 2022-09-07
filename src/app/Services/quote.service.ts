import { Injectable } from '@angular/core';
import { Quote } from '../Classes/quote';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quote !: Quote;

  constructor(private http: HttpClient) {
    this.quote = new Quote("", "");
  }
  
  quoteRequest() {

    interface ApiResponse{
      quote: string;
      author: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse | any>(environment.apiUrl).toPromise().then((response) => {

        this.quote.quote = response.quote;
        this.quote.author = response.author;

        resolve();

      },
        error => {
          this.quote.quote = "Angular is pretty amazing framework.";
          this.quote.author = "Cheborgei Vitalis"

          reject(error);
        }
      )
    })

    return promise;
    
  }

}
