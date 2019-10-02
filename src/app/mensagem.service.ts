import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MensagemService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
