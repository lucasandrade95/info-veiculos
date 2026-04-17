import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoService } from '../../../core/services/veiculo.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Veiculo} from "../../../core/models/veiculo";

@Component({
  selector: 'app-veiculo-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './veiculo-list.component.html'
})
export class VeiculoListComponent implements OnInit {
  veiculos: Veiculo[] = [];
  veiculoForm: FormGroup;
  isEditing = false;
  currentId?: number;

  constructor(private service: VeiculoService, private fb: FormBuilder) {
    this.veiculoForm = this.fb.group({
      placa: ['', [Validators.required, Validators.maxLength(7), Validators.pattern(/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/)]],
      chassi: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      renavam: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      modelo: ['', [Validators.required, Validators.maxLength(50)]],
      marca: ['', [Validators.required, Validators.maxLength(30)]],
      ano: [new Date().getFullYear(), [Validators.required, Validators.min(1900), Validators.max(2100)]]
    });
  }

  ngOnInit(): void { this.load(); }

  load(): void { this.service.getVeiculos().subscribe(data => this.veiculos = data); }

  onSubmit(): void {
    if (this.veiculoForm.invalid) return;

    const data = this.veiculoForm.value;
    const request$ = this.isEditing
      ? this.service.update({ id: this.currentId, ...data })
      : this.service.create(data);

    request$.subscribe({
      next: () => {
        this.load();
        this.reset();
      },
      error: (err) => console.error('Erro na operação:', err)
    });
  }

  edit(v: Veiculo): void {
    this.isEditing = true;
    this.currentId = v.id;
    this.veiculoForm.patchValue(v);
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => this.load());
  }

  reset(): void {
    this.isEditing = false;
    this.currentId = undefined;
    this.veiculoForm.reset({ ano: new Date().getFullYear() });
  }
}
