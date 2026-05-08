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
  mode: 'new' | 'current' = 'new'; // Translated 'nuevo' to 'new', 'actual' to 'current'
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

  setMode(mode: 'new' | 'current') { // Translated 'nuevo' to 'new', 'actual' to 'current'
    this.mode = mode;

    if (mode === 'new') { // Translated 'nuevo' to 'new'
      this.clientName = '';
    }
  }
  onFocusTextarea() {
    if (!this.form.value.message) {
      this.isExpanded = true;
    }
  }
  tags: Tag[] = [ // Translated labels
    { label: 'Technical Analysis', color: '#6161ff', active: true },
    { label: 'Competitor Benchmarking', color: '#9450fd', active: false },
    { label: 'Market Analysis', color: '#00c875', active: false },
    { label: 'UX / Accessibility', color: '#3ac9ff', active: false },
    { label: 'Conversion Funnel', color: '#ff8940', active: false },
    { label: 'Unmet Demand', color: '#e44258', active: false },
  ];

  loading = false;
  loadingSteps = [ // Translated messages
    'Reading and structuring available information…',
    'Searching for relevant patterns in internal and external sources…',
    'Analyzing context, relationships, and possible interpretations…',
    'Processing data and generating semantic connections…',
    'Filtering irrelevant information and prioritizing important signals…',
    'Generating report',
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
      // clientName: this.mode === 'current' ? this.form.value.clientName : null, // Translated 'actual' to 'current'
      userMessage: this.form.value.message,
      enrichFromChroma: this.mode === 'current' ? true : false, // Translated 'actual' to 'current'
      // tags: this.tags.filter((t) => t.active).map((t) => t.label),
    };

    this.loading = true;
    this.currentStep = 0;
    // this.runLoadingSteps();
  this.competitiveAnalysisService.getCompetitiveAnalysis(payload);
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
