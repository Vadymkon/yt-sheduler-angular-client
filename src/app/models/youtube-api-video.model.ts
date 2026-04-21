export interface VideoSnippet {
  title: string;
  description: string;
  categoryId: string;
}

export interface VideoStatus {
  privacyStatus: 'private' | 'public' | 'unlisted'; // Използване на Union тип за по-голяма точност
}

export interface VideoUploadPayload {
  snippet: VideoSnippet;
  status: VideoStatus;
}
