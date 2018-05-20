import { CacheService } from 'ionic-cache';
import { Observable } from 'rxjs';

interface ICachedServiceBase {
  clean(): Promise<any>;

  enableCache(enabled: boolean);
}

export abstract class CachedServiceBase implements ICachedServiceBase {
  private cacheEnabled = true;

  enableCache(enabled: boolean) {
    this.cacheEnabled = enabled;
  }

  protected constructor(public cacheGroupName: string, public cache: CacheService) {
  }

  clean(): Promise<any> {
    return this.cache.clearGroup(this.cacheGroupName);
  }

  cacheResponse(key: string, request: Observable<any>, ttl?: number) {
    if (!this.cacheEnabled) {
      return request;
    }
    return this.cache.loadFromObservable(key, request, this.cacheGroupName, ttl);
  }
}