import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../interfaces/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDataService {

  constructor( private httpClient: HttpClient) { }

  getFeturedPlaylist( playlistType: string): Observable<Map<string, Playlist>> {
    return this.httpClient.get<Map<string, Playlist>>( '/assets/data/play-list.json');
  }
}
