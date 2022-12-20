import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import xml2js from 'xml2js'; 


@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent {
  
  public xmlItems: any;
  constructor(private http:HttpClient) {
     
       this.loadXML(); 
     }
   loadXML()
          {
            this.http.get('../assets/data/archivo.xml',  
            {  
              headers: new HttpHeaders()  
                .set('Content-Type', 'text/xml')  
                .append('Access-Control-Allow-Methods', 'GET')  
                .append('Access-Control-Allow-Origin', '*')  
                .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
              responseType: 'text'  
            })  
            .subscribe((data) => {  
              this.parseXML(data)  
                .then((data) => {  
                  this.xmlItems = data;  
                });  
            });  
          }
          parseXML(data: string | xml2js.convertableToString) {  
              return new Promise(resolve => {  
                var k: string | number,  
                  arr: any = [],  
                  parser = new xml2js.Parser(  
                    {  
                      trim: true,  
                      explicitArray: true  
                    });  
                parser.parseString(data, function (err, result) {  
                  var obj = result.Employee;  
                  for (k in obj.emp) {  
                    var item = obj.emp[k];  
                    arr.push({  
                      id: item.id[0],  
                      name: item.name[0],  
                      email: item.email[0],  
                      total: item.total[0],  
                      hora: item.hora[0],  
                      sueldo: item.sueldo[0],  
                      
                    });  
                  }  
                  resolve(arr);  
                });  
              });  
            }  
}
