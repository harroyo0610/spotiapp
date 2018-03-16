import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class SpotifyService {
  artists:any[] = []
  constructor(public http: HttpClient) {
    console.log("Service spotify");
  }

  getArtists(){
    let url: 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQDXqMskdiU30nwPiAuyv0CRAa9gO6keUCi7UgwCGlVWwAZg4JAV-HBRe_TdnMg3wm8DTQxk_i469yYW1iM'
    });
    return this.http.get(url, { headers });
  }
}
