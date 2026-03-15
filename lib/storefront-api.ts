const DEFAULT_BASE_URL = "http://localhost:3000/api/v1";

export type StorefrontCategory = {
  id: string;
  name: string;
  parent_id: string | null;
  tenant_id: string;
  created_at: string;
};

export type StorefrontProduct = {
  id: string;
  name: string;
  description?: string;
  sku: string;
  price: number;
  stock: number;
  image_url?: string | null;
  categories?: {
    name: string;
  } | null;
};

type PaginatedResponse<T> = {
  data: T[];
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

function getApiConfig() {
  return {
    baseUrl: process.env.STOREFRONT_API_BASE_URL ?? DEFAULT_BASE_URL,
    apiKey: process.env.STOREFRONT_API_KEY,
  };
}

async function storefrontFetch<T>(path: string, params?: Record<string, string | number>) {
  const { baseUrl, apiKey } = getApiConfig();

  if (!apiKey) {
    throw new Error("Missing STOREFRONT_API_KEY environment variable");
  }

  const url = new URL(`${baseUrl}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Storefront API request failed (${response.status}) for ${path}`);
  }

  return (await response.json()) as T;
}

export async function fetchStorefrontCategories(limit = 8) {
  const result = await storefrontFetch<PaginatedResponse<StorefrontCategory>>("/categories", {
    page: 1,
    limit,
  });

  return result.data ?? [];
}

export async function fetchStorefrontProducts(limit = 8) {
  const result = await storefrontFetch<PaginatedResponse<StorefrontProduct>>("/products", {
    page: 1,
    limit,
  });

  return result.data ?? [];
}
