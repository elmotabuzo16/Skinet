import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from './../shared/models/pagination';
import { IBrand } from './../shared/models/brands';
import { IType } from './../shared/models/productType';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number) {

    // this is for query string like products?brandId=3 or products?typeId=1
    let params = new HttpParams();
    if(brandId) {
      params = params.append('brandId', brandId.toString());
    }
    if(typeId) {
      params = params.append('typeId', typeId.toString());
    }

    return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=50', {observe: 'response', params})
    .pipe(
      map(response => {
        return response.body;
      })
    )

  }

  getProductsTest() {
    return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=50');
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
  
}
