import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 1 }), 'A1 — Vis : 3');
});

test('formaterLigne signale un produit en alerte', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5 }), 'A1 — Vis : 3 ⚠');
});

test('formaterLigne signale un produit dont la quantité égale le seuil', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 5, seuil: 5 }), 'A1 — Vis : 5 ⚠');
});