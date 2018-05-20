import { CacheService } from 'ionic-cache';
import { Observable } from 'rxjs';

interface ICachedServiceBase {
  clean(): Promise<any>;
}

export abstract class CachedServiceBase implements ICachedServiceBase {

  protected constructor(public cacheGroupName: string, public cache: CacheService) {
  }

  clean(): Promise<any> {
    return this.cache.clearGroup(this.cacheGroupName);
  }

  cacheResponse(key: string, request: Observable<any>, ttl?: number) {
    return this.cache.loadFromObservable(key, request, this.cacheGroupName, ttl);
  }
}