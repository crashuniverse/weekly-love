import config from '../config';

test('Config should exist and have an apiKey for lastfm', () => {
  expect(config).toBeDefined();
  expect(config.apiKey).toBeDefined();
});
