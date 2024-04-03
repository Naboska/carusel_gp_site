export type TMethod<Data> = {
  path: string;
  method: 'GET' | 'POST';
  data?: Data;
};

export class HttpClient {
  protected async request<T = unknown, D = unknown>({ path, method, data }: TMethod<D>): Promise<T> {
    const result = await fetch(path, {
      method,
      body: typeof data === 'object' ? JSON.stringify(data) : (data as BodyInit),
    });

    return result.json();
  }
}
