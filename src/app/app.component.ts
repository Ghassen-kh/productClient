import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  products: any;
  id:number;
  name:string;
  description:string;
  price:number;
  id1:number;
  name1:string;
  description1:string;
  price1:number;
  id2:number;
  name2:string;
  description2:string;
  price2:number;
  id3:number;
  name3:string;
  description3:string;
  price3:number;
  createResponse:any;
  updateResponse:any;
  getProductResponse:any;
  deleteResponse:any;

  constructor(private _service: ProductDataService){

  }
  ngOnInit(){
    this._service.getProducts().subscribe(res => {
      this.products = res;
    });
  }
  public createProduct(product:any){
    this._service.create(product).subscribe(res=>{
      this.createResponse = res;
    })
  }
  public updateProduct(product:any){
    this._service.update(product).subscribe(res=>{
      this.updateResponse = res;
    })
  }

  public getProduct(id: number){
    this._service.getProduct(id).subscribe(res=>{
      this.getProductResponse = res;
    })
  }

  public deleteProduct(id:number){
    this._service.delete(id).subscribe(res=>{
      this.deleteResponse = res;
    })
  }
}
