import axios from 'axios';

const TMDB_API_KEY = '800e51d97755c2994e7aba7143888ef0';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export interface StreamingProviderOption {
  id: number;
  name: string;
  logoPath?: string;
}

const INDIA_PROVIDER_PRIORITY = [
  'Netflix',
  'Amazon Prime Video',
  'JioHotstar',
  'Hotstar',
  'Sony Liv',
  'SonyLIV',
  'Zee5',
  'ZEE5',
  'Sun Nxt',
  'Sun NXT',
  'aha',
  'ETV Win',
  'ManoramaMAX',
  'Hoichoi',
  'Chaupal',
  'Lionsgate Play',
  'Apple TV Plus',
  'MUBI',
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function priorityFor(name: string) {
  const normalized = normalize(name);
  const index = INDIA_PROVIDER_PRIORITY.findIndex((candidate) => normalize(candidate) === normalized);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

export async function fetchIndiaStreamingProviders(): Promise<StreamingProviderOption[]> {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/watch/providers/movie`, {
      params: { api_key: TMDB_API_KEY, watch_region: 'IN' },
    });

    const raw = (response.data.results || []) as Array<{
      provider_id: number;
      provider_name: string;
      logo_path?: string;
    }>;

    const preferredNames = new Set(INDIA_PROVIDER_PRIORITY.map(normalize));
    const preferred = raw
      .filter((provider) => preferredNames.has(normalize(provider.provider_name)))
      .map((provider) => ({
        id: provider.provider_id,
        name: provider.provider_name,
        logoPath: provider.logo_path,
      }))
      .sort((a, b) => priorityFor(a.name) - priorityFor(b.name));

    return preferred.length > 0 ? preferred : [
      { id: 8, name: 'Netflix' },
      { id: 119, name: 'Amazon Prime Video' },
      { id: 232, name: 'ZEE5' },
    ];
  } catch (error) {
    console.error('Failed to load India streaming provider registry', error);
    return [
      { id: 8, name: 'Netflix' },
      { id: 119, name: 'Amazon Prime Video' },
      { id: 232, name: 'ZEE5' },
    ];
  }
}
