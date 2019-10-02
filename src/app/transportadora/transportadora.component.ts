import { Component, OnInit } from '@angular/core';
import { Transportadora } from '../transportadora';
import { TransportadoraService } from '../TransportadoraService';

@Component({
  selector: 'app-transportadora',
  templateUrl: './transportadora.component.html',
  styleUrls: ['./transportadora.component.css']
})
export class TransportadoraComponent implements OnInit {

  transportadoras: Transportadora[];
  constructor(private transportadoraService: TransportadoraService) { }

  ngOnInit() {
  this.getTransportadoras();
  }

  getTransportadoras():void{
    this.transportadoraService.getTransportadoras().subscribe(transportadoras => this.transportadoras = transportadoras)
  }

  delete(transportadora: Transportadora): void {
    this.transportadoras = this.transportadoras.filter(h => h !== transportadora);
    this.transportadoraService.deleteTransportadora(transportadora).subscribe();
  }


  }
