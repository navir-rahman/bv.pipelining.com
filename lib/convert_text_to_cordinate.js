
export default async function get_cordinate(term) {

    const url = 
      `https://nominatim.openstreetmap.org/search?format=json&q=${term}`;

      try {
    const res = await fetch(url.toString(), {
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      console.error('geocode failed:', res.status);
      return null;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;

    return [Number(data[0].lat), Number(data[0].lon)];

  } catch (err) {
    console.error('geocode error:', err);
    return null;
  }
}

