import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';

class CacheItem<T> {
  url: string;
  timestampCached: number;
  data: T;
}

@Injectable()
export class CachedHttpClient {

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * @param {string} url
   * @param {number} cacheTime: cache timeout in seconds
   * @param {boolean} forceRefresh
   * @returns {Observable<T>}
   */
  get<T>(url: string, cacheTime?: number, forceRefresh: boolean = false): Observable<T> {
    const cacheTimeMs = cacheTime * 1000;
    let cachedItem: CacheItem<T> = this.getCachedItem<T>(url);
    if (cachedItem !== undefined && !forceRefresh) {
      const expireDate = cachedItem.timestampCached + cacheTimeMs;
      if (Date.now() < expireDate) {
        // cache data was expired, make original request
        return Observable.of(cachedItem.data);
      }
    }
    return this.http.get<T>(url).pipe(map(data => {
      if (cacheTimeMs) {
        if (cachedItem === undefined) {
          cachedItem = new CacheItem();
        }
        cachedItem.url = url;
        cachedItem.data = data;
        cachedItem.timestampCached = Date.now();
        this.setCachedItem(cachedItem);
      }
      return data;
    }));
  }

  private setCachedItem<T>(item: CacheItem<T>): void {
    const curData = this.getCache();
    curData[item.url] = item;
    localStorage.setItem('cached-http-data', JSON.stringify(curData));
  }

  private getCachedItem<T>(url: string): CacheItem<T> {
    return this.getCache()[url];
  }

  private getCache() {
    return JSON.parse(localStorage.getItem('cached-http-data') || '{}');
  }

}