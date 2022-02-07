import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlist';
import { PlaylistDataService } from 'src/app/services/playlist-data.service';

const TYPE_FEATURED_PLAYLIST = 'featuredPlaylists';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  featuredPlaylist: Playlist;

  constructor( private playlistDataService: PlaylistDataService) { }

  ngOnInit(): void {
    this.playlistDataService.getFeturedPlaylist( TYPE_FEATURED_PLAYLIST).subscribe(
      (dataMap: Map<string, Playlist>) => {
        this.featuredPlaylist = dataMap[TYPE_FEATURED_PLAYLIST];
      },
      (error: Error) => {
        console.error( 'Failed to get playlist data');
      }
    );
  }

}
