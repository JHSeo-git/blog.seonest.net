type ClientOpeion = Omit<RequestInit, 'method'>;

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  static async request<TResponse>(url: string, config: RequestInit): Promise<TResponse> {
    const response = await fetch(url, config);

    if (response.status === 204) {
      return {} as TResponse;
    }

    const data = await response.json();

    return data;
  }

  generateUrl(url: string) {
    return `${this.baseUrl}/${url.startsWith('/') ? url.slice(1) : url}`;
  }

  get<TResponse>(url: string, option?: ClientOpeion | undefined) {
    const generatedUrl = this.generateUrl(url);

    return ApiClient.request<TResponse>(generatedUrl, {
      ...option,
      method: 'GET',
    });
  }

  post<TResponse>(url: string, body?: object, option?: ClientOpeion | undefined) {
    const generatedUrl = this.generateUrl(url);

    return ApiClient.request<TResponse>(generatedUrl, {
      ...option,
      headers: {
        ...option?.headers,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
      method: 'POST',
    });
  }

  put<TResponse>(url: string, body?: object, option?: ClientOpeion | undefined) {
    const generatedUrl = this.generateUrl(url);

    return ApiClient.request<TResponse>(generatedUrl, {
      ...option,
      headers: {
        ...option?.headers,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
      method: 'PUT',
    });
  }

  patch<TResponse>(url: string, body?: object, option?: ClientOpeion | undefined) {
    const generatedUrl = this.generateUrl(url);

    return ApiClient.request<TResponse>(generatedUrl, {
      ...option,
      headers: {
        ...option?.headers,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
      method: 'PATCH',
    });
  }

  delete<TResponse>(url: string, option?: ClientOpeion | undefined) {
    const generatedUrl = this.generateUrl(url);

    return ApiClient.request<TResponse>(generatedUrl, {
      ...option,
      method: 'DELETE',
    });
  }
}

export default ApiClient;
