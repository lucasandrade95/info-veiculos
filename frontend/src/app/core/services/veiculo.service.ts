import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {Veiculo} from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private readonly STORAGE_KEY = 'infosistemas_frota_db';

  constructor() {
    this.initStorage();
  }

  private initStorage(): void {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
  }

  private getRawData(): Veiculo[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  getVeiculos(): Observable<Veiculo[]> {
    return of(this.getRawData()).pipe(delay(500));
  }

  create(veiculo: Veiculo): Observable<Veiculo> {
    const data = this.getRawData();
    const novoVeiculo = { ...veiculo, id: Date.now() };
    data.push(novoVeiculo);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    return of(novoVeiculo).pipe(delay(300));
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    const data = this.getRawData();
    const index = data.findIndex(v => v.id === veiculo.id);

    if (index === -1) return throwError(() => new Error('Veículo não encontrado'));

    data[index] = { ...veiculo };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    return of(data[index]).pipe(delay(300));
  }

  delete(id: number): Observable<boolean> {
    let data = this.getRawData();
    data = data.filter(v => v.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    return of(true).pipe(delay(200));
  }
}
