import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Transportadora } from './transportadora';
import { MensagemService } from './mensagem.service';


@Injectable({ providedIn: 'root' })
export class TransportadoraService {

  private baseUrl = 'http://localhost:8080/transportadoras';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensagemService: MensagemService) { }

  /** GET heroes from the server */
  getTransportadoras (): Observable<Transportadora[]> {
    return this.http.get<Transportadora[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched Transportadora')),
        catchError(this.handleError<Transportadora[]>('getTransportadoras', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getTranspNo404<Data>(id: number): Observable<Transportadora> {
    const url = `${this.baseUrl}/?id=${id}`;
    return this.http.get<Transportadora[]>(url)
      .pipe(
        map(transportadoras => transportadoras[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} transportadora id=${id}`);
        }),
        catchError(this.handleError<Transportadora>(`getTransportadora id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getTransportadora(id: number): Observable<Transportadora> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Transportadora>(url).pipe(
      tap(_ => this.log(`fetched transportadora id=${id}`)),
      catchError(this.handleError<Transportadora>(`getTransportadora id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchTransportadora(term: string): Observable<Transportadora[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Transportadora[]>(`${this.baseUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found transportadoras matching "${term}"`)),
      catchError(this.handleError<Transportadora[]>('searchTransportadora', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addTransportadora (transportadora: Transportadora): Observable<Transportadora> {
    return this.http.post<Transportadora>(this.baseUrl, transportadora, this.httpOptions).pipe(
      tap((newTransportadora: Transportadora) => this.log(`added Transportadora w/ id=${newTransportadora.codigoId}`)),
      catchError(this.handleError<Transportadora>('addTransportadora'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteTransportadora (transportadora: Transportadora | number): Observable<Transportadora> {
    const id = typeof transportadora === 'number' ? transportadora : transportadora.codigoId;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Transportadora>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted transportadora id=${id}`)),
      catchError(this.handleError<Transportadora>('deleteTransportadora'))
    );
  }

  /** PUT: update the hero on the server */
  updateTransportadora(transportadora: Transportadora): Observable<any> {
    return this.http.put(this.baseUrl, transportadora, this.httpOptions).pipe(
      tap(_ => this.log(`updated transportadora id=${transportadora.codigoId}`)),
      catchError(this.handleError<any>('updatetransportadora'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.mensagemService.add(`TransportadoraService: ${message}`);
  }
}
