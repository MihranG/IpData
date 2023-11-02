import MockAdapter from 'axios-mock-adapter';
import { fetchUserLocation, api, fetchIPInfo } from './api';

const mock = new MockAdapter(api);

describe('API Tests', () => {
  afterAll(() => {
    mock.restore();
  });
  it('fetchUserLocation should return user location data', async () => {
    const responseData = { ip: '127.0.0.1', isp: 'Internet Provider' };
    mock.onGet('&output=json').reply(200, responseData);

    const response = await fetchUserLocation();

    expect(response.data).toEqual(responseData);
  });

  it('fetchIPInfo should return IP address data', async () => {
    const responseData = { ip: '127.0.0.1', isp: 'Internet Provider' };
    mock.onGet('8.8.8.8&output=json').reply(200, responseData);

    const response = await fetchIPInfo('8.8.8.8');

    expect(response.data).toEqual(responseData);
  });
});
