import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';

export interface CompetitiveAnalysis {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class CompetitiveAnalysisService {
  private analysisSubject = new BehaviorSubject<CompetitiveAnalysis | null>(
    null,
  );

  analysis$ = this.analysisSubject.asObservable();

  constructor(private http: HttpClient) {}

  async getCompetitiveAnalysis(payload: any) {
    this.analysisSubject.next(null);

    const response = await fetch(
      'http://localhost:8080/api/competitive-analysis',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
        body: JSON.stringify(payload),
      },
    );

    const text = await response.text();

    const lines = text.split('\n');

    for (const line of lines) {
      if (!line.startsWith('data:')) continue;

      const content = line.replace('data:', '').trim();

      if (content === '[DONE]') break;

      const parsed = JSON.parse(content);

      console.log(parsed);

      this.analysisSubject.next(parsed);
    }
  }
  // getCompetitiveAnalysis(): Observable<any> {
  //   const mockResponse = {
  //     action: 'COMPETITIVE_ANALYSIS_RESULT',
  //     payload: {
  //       targetSite: 'fravega.com',
  //       industry: 'E-commerce',
  //       industryConfidence: 0.95,
  //       summary:
  //         'Fravega presenta oportunidades de mejora en customer support y tracking.',

  //       missingFeatures: [
  //         {
  //           name: 'Live Chat',
  //           description: 'No posee soporte inmediato en tiempo real',
  //           source: 'Reddit',
  //         },
  //       ],

  //       competitorFeatures: [
  //         {
  //           feature: 'Order Tracking',
  //           competitor: 'Amazon',
  //           description: 'Tracking en tiempo real',
  //         },
  //       ],

  //       userRequests: [
  //         {
  //           request: 'Necesito mejor soporte',
  //           sentiment: 'negative',
  //           source: 'TikTok',
  //         },
  //       ],

  //       industryStandards: [
  //         {
  //           standard: 'Live Support',
  //           description: 'Chat en tiempo real',
  //           status: 'missing',
  //         },
  //       ],

  //       sources: [
  //         {
  //           title: 'Reddit Feedback',
  //           url: 'https://reddit.com',
  //         },
  //       ],

  //       tokensUsed: 2996,
  //     },
  //   };

  //   return of(mockResponse).pipe(
  //     // delay(12000),
  //     tap((response) => {
  //       this.analysisSubject.next(response);
  //     }),
  //   );
  // }
  setAnalysis(data: CompetitiveAnalysis): void {
    this.analysisSubject.next(data);
  }

  getCurrentAnalysis(): CompetitiveAnalysis | null {
    return this.analysisSubject.value;
  }

  clearAnalysis(): void {
    this.analysisSubject.next(null);
  }
}
