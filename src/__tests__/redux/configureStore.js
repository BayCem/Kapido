import configureStore from '../../redux/configureStore';

it('creates store successfully', () => {
  const store = configureStore();

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
