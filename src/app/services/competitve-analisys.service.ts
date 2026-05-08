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

  getCompetitiveAnalysis(payload: any): Observable<CompetitiveAnalysis> {
    return this.http
      .post<CompetitiveAnalysis>(
        'http://localhost:8080/api/competitive-analysis',
        payload,
      )
      .pipe(
        tap((response) => {
          this.analysisSubject.next(response);
        }),
      );
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
