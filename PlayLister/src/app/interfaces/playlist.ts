import { PlaylistItem } from './playlist-item';

export interface Playlist {
    name: string;
    content: Array<PlaylistItem>;
}
