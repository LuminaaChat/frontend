import {Injectable, Signal} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {Group} from "../types/group.type";

@Injectable({
  providedIn: 'root'
})
export class GroupsApiService {
  baseUrl = `${environment.url}${environment.apiVersion}/groups`;

  constructor(private http: HttpClient) { }

  list(): Signal<Group[] | undefined> {
    const observable: Observable<Group[]> = this.http.get<Group[]>(this.baseUrl);
    return toSignal(observable);
  }

  get(id: string): Signal<Group | undefined> {
    const observable: Observable<Group> = this.http.get<Group>(`${this.baseUrl}/${id}`);
    return toSignal(observable);
  }

  create(entity: Group): Signal<Group | undefined> {
    const observable: Observable<Group> = this.http.post<Group>(`${this.baseUrl}`, entity);
    return toSignal(observable);
  }

  update(entity: Group): Signal<Group | undefined> {
    const observable: Observable<Group> = this.http.put<Group>(`${this.baseUrl}/${entity._id}`, entity);
    return toSignal(observable);
  }

  delete(id: string): Signal<Group | undefined> {
    const observable: Observable<Group> = this.http.delete<Group>(`${this.baseUrl}/${id}`);
    return toSignal(observable);
  }
}
