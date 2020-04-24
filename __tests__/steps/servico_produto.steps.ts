import { loadFeature, defineFeature } from 'jest-cucumber';
import { resolve } from 'path';

const feature = loadFeature(resolve(__dirname, 'features', 'servico_produto.feature'));

defineFeature(feature, test => {
  test('Launching a SpaceX rocket', ({ given, when, then, and }) => {
    given('I am Elon Musk attempting to launch a rocket into space', () => {
      expect(true).toBe(true);
    });

    when('I launch the rocket', () => {
      expect(true).toBe(true);
    });

    then('the rocket should end up in space', () => {
      expect(true).toBe(true);
    });

    and('the booster(s) should land back on the launch pad', () => {
      expect(true).toBe(true);
    });

    and('nobody should doubt me ever again', () => {
      expect(true).toBe(true);
    });
  });
});
