export const AIRTABLE_API_KEY =
  process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN ||
  process.env.AIRTABLE_API_KEY ||
  "";

export const AIRTABLE_ACCOUNT_EMAIL =
  process.env.AIRTABLE_ACCOUNT_EMAIL || "info.develiteinteriors@gmail.com";

/**
 * Helper to call Airtable REST API endpoints
 */
export async function airtableFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const url = endpoint.startsWith("https://")
    ? endpoint
    : `https://api.airtable.com/v0/${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Airtable API error (${res.status}): ${errorText}`);
  }

  return res.json();
}
