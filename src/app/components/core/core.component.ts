import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tag } from '../../models/Tag.model';
import { Router } from '@angular/router';
import { CompetitiveAnalysisService } from '../../services/competitve-analisys.service';

@Component({
  selector: 'brian-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class CoreComponent {
  mode: 'nuevo' | 'actual' = 'nuevo';
  isFocused = false;
  value = '';
  clientName = '';
  form: FormGroup;
  isExpanded = false;
  constructor(
    private fb: FormBuilder,
    protected router: Router,
    protected competitiveAnalysisService: CompetitiveAnalysisService,
  ) {}

  setMode(mode: 'nuevo' | 'actual') {
    this.mode = mode;

    if (mode === 'nuevo') {
      this.clientName = '';
    }
  }
  onFocusTextarea() {
    if (!this.form.value.message) {
      this.isExpanded = true;
    }
  }
  tags: Tag[] = [
    { label: 'Análisis técnico', color: '#6161ff', active: true },
    { label: 'Benchmarking competencia', color: '#9450fd', active: false },
    { label: 'Análisis de mercado', color: '#00c875', active: false },
    { label: 'UX / accesibilidad', color: '#3ac9ff', active: false },
    { label: 'Funnel de conversión', color: '#ff8940', active: false },
    { label: 'Demanda no cubierta', color: '#e44258', active: false },
  ];

  loading = false;
  loadingSteps = [
    'Leyendo y estructurando la información disponible…',
    'Buscando patrones relevantes en fuentes internas y externas…',
    'Analizando contexto, relaciones y posibles interpretaciones…',
    'Procesando datos y generando conexiones semánticas…',
    'Filtrando información irrelevante y priorizando señales importantes…',
    'Generando reporte',
  ];

  currentStep = 0;

  ngOnInit() {
    this.form = this.fb.group({
      message: ['', Validators.required],
      clientName: [''],
    });
  }
  toggleTag(tag: Tag) {
    tag.active = !tag.active;
  }

  sendPrompt() {
    if (this.form.invalid) return;

    const payload = {
      // clientType: this.mode,
      // clientName: this.mode === 'actual' ? this.form.value.clientName : null,
      userMessage: this.form.value.message,

      // tags: this.tags.filter((t) => t.active).map((t) => t.label),
    };

    this.loading = true;
    this.currentStep = 0;
    // this.runLoadingSteps();
    this.competitiveAnalysisService.getCompetitiveAnalysis().subscribe();
    setTimeout(() => {
      this.router.navigate(['/report']);
    }, 1000);
  }

  // runLoadingSteps() {
  //   this.loading = true;
  //   this.currentStep = 0;

  //   this.nextStep();
  // }

  nextStep() {
    if (this.currentStep >= this.loadingSteps.length) {
      // this.loading = false;
      return;
    }

    setTimeout(() => {
      this.currentStep++;
      this.nextStep();
    }, 3000);
  }
}
