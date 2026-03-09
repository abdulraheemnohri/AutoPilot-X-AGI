class LocationService {
  async getCurrentLocation() {
    return { lat: 0, lng: 0 };
  }
}
export default new LocationService();
