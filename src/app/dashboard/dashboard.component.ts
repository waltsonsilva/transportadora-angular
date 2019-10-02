import { Component, OnInit } from '@angular/core';
import { Transportadora } from '../transportadora';
import { TransportadoraService } from '../transportadoraService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  transportadoras: Transportadora[] = [];

  constructor(private transportadoraService: TransportadoraService) { }

  ngOnInit() {
  this.getTransportadoras();
  }

  getTransportadoras(): void{
    this.transportadoraService.getTransportadoras().subscribe(transportadoras=>this.transportadoras=transportadoras.slice(1,5))
  }

}
