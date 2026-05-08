import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, Observable, Subscription, take } from 'rxjs';
import { CompetitiveAnalysisService } from '../../services/competitve-analisys.service';

type StepStatus = 'done' | 'running' | 'waiting';

@Component({
  selector: 'app-analize',
  templateUrl: './analize.component.html',
  styleUrl: './analize.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class AnalizeComponent implements OnInit, OnDestroy {
  private interval?: ReturnType<typeof setInterval>;
  private subscription?: Subscription;

  hasReport = false;
  currentStep = 0;
  progress = 0;
  private dataReady = false;
  data$: Observable<any>;
  STEPS = [
    {
      name: 'Reconocimiento',
      desc: 'Identificando industria y contexto del cliente',
      status: 'running' as StepStatus,
    },
    {
      name: 'Análisis técnico',
      desc: 'Revisando experiencia, tecnología y friction points',
      status: 'waiting' as StepStatus,
    },
    {
      name: 'Benchmark sectorial',
      desc: 'Comparando con referentes del mercado',
      status: 'waiting' as StepStatus,
    },
    {
      name: 'Investigación de mercado',
      desc: 'Explorando oportunidades y demanda no cubierta',
      status: 'waiting' as StepStatus,
    },
    {
      name: 'Síntesis y propuesta',
      desc: 'Consolidando hallazgos y generando documento final',
      status: 'waiting' as StepStatus,
    },
  ];

  constructor(private competitiveAnalysisService: CompetitiveAnalysisService) {}

  ngOnInit(): void {
    this.data$ = this.competitiveAnalysisService.analysis$;

    this.startFakeAnalysis();

    this.subscription = this.competitiveAnalysisService.analysis$
      .pipe(
        filter((data) => !!data),
        take(1),
      )
      .subscribe(() => {
        this.dataReady = true;

        if (this.currentStep >= this.STEPS.length - 1) {
          this.completeLastStep();
        }
      });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.subscription?.unsubscribe();
  }

  startFakeAnalysis(): void {
    this.interval = setInterval(() => {
      if (this.currentStep >= this.STEPS.length - 1) {
        clearInterval(this.interval);
        this.STEPS[this.currentStep].status = 'running';
        if (this.dataReady) {
          this.completeLastStep();
        }

        return;
      }

      this.STEPS[this.currentStep].status = 'done';

      this.currentStep++;

      this.progress = Math.round((this.currentStep / this.STEPS.length) * 100);

      this.STEPS[this.currentStep].status = 'running';
    }, 3000);
  }

  completeLastStep(): void {
    this.STEPS[this.currentStep].status = 'done';

    this.currentStep = this.STEPS.length;

    this.progress = 100;

    this.hasReport = true;
  }

  get completedSteps(): number {
    return this.currentStep;
  }
}
