# PlayLister

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Playlist Service

Very simple injectable Service that "gets" the playlist from a local JSON file. This means that it can
easily be enhanced to perform an HTTP call to a service endpoint (when needed!). Its only method is
declared with a parameter that could act as a differentiator to acquire other playlists. 

## Routing

There really is no routing as such, but the routing config is declared with the default route being
the playlist viewer component.

## Playlist Viewer

A very simple Component that calls out to its injected service and subscribes to the returned Observable.
The returned playlist data is then displayed using a basic flexbox layout (that will wrap to accommodate
various screen sizes), where each item of content is represented by a "card" containing a link to explore
each item in detail.
