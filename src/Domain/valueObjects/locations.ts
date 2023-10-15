export default class Location {
    lat: number;
    lng: number;
    alt: number | undefined | null;

    constructor(lat, lng, alt = null) {
        this.lat = lat;
        this.lng = lng;
        this.alt = alt;
    }

    // Implement equality comparison for value objects
    equals(otherLocation) {
        return (
            this.lat === otherLocation.lat &&
            this.lng === otherLocation.lng &&
            this.alt === otherLocation.alt
        );
    }
}
