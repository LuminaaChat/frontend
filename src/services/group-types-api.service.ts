import {Injectable, Signal} from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {GroupType} from "../types/group-type.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupTypesApiService {
  baseUrl = `${environment.url}${environment.apiVersion}/group-types`;

  constructor(private http: HttpClient) { }

  list(): Signal<GroupType[] | undefined> {
    const observable: Observable<GroupType[]> = this.http.get<GroupType[]>(this.baseUrl);
    return toSignal(observable);
  }

  get(id: string): Signal<GroupType | undefined> {
    const observable: Observable<GroupType> = this.http.get<GroupType>(`${this.baseUrl}/${id}`);
    return toSignal(observable);
  }

  create(entity: GroupType): Signal<GroupType | undefined> {
    const observable: Observable<GroupType> = this.http.post<GroupType>(`${this.baseUrl}`, entity);
    return toSignal(observable);
  }

  update(entity: GroupType): Signal<GroupType | undefined> {
    const observable: Observable<GroupType> = this.http.put<GroupType>(`${this.baseUrl}/${entity._id}`, entity);
    return toSignal(observable);
  }

  delete(id: string): Signal<GroupType | undefined> {
    const observable: Observable<GroupType> = this.http.delete<GroupType>(`${this.baseUrl}/${id}`);
    return toSignal(observable);
  }
}
