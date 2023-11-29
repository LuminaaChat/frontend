import {Injectable, Signal} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {User} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  baseUrl = `${environment.url}${environment.apiVersion}/users`;

  constructor(private http: HttpClient) { }

  list(): Signal<User[]> {
    const observable: Observable<User[]> = this.http.get<User[]>(this.baseUrl);
    return toSignal(observable) as Signal<User[]>;
  }

  get(id: string): Signal<User | undefined> {
    const observable: Observable<User> = this.http.get<User>(`${this.baseUrl}/${id}`);
    return toSignal(observable);
  }

  create(entity: User): Signal<User | undefined> {
    const observable: Observable<User> = this.http.post<User>(`${this.baseUrl}`, entity);
    return toSignal(observable);
  }

  update(entity: User): Signal<User | undefined> {
    const observable: Observable<User> = this.http.put<User>(`${this.baseUrl}/${entity._id}`, entity);
    return toSignal(observable);
  }

  delete(id: string): Signal<User | undefined> {
    const observable: Observable<User> = this.http.delete<User>(`${this.baseUrl}/${id}`);
    return toSignal(observable);
  }
}
