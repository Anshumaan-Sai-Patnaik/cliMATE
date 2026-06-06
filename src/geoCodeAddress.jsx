export default async function geocodeAddress(address) {
    const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;;
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Geocoding error:", error);
        throw error;
    }
}