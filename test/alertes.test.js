import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Stock } from '../src/stock.js';

test('un produit sous son seuil déclenche une alerte', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 1, 5);
  s.ajouter('B2', 'Colle', 50, 5);
  assert.deepEqual(s.alertes().map((p) => p.ref), ['A1']);
});

test('un produit dont la quantité égale le seuil déclenche une alerte', () => {
  const s = new Stock();
  s.ajouter('X1', 'Pile', 5, 5);
  assert.deepEqual(s.alertes().map((p) => p.ref), ['X1']);
});