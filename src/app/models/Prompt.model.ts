export interface PromptRequest {
  clientType: 'nuevo' | 'actual';
  clientName: string | null;
  message: string;
  tags: string[];
}
