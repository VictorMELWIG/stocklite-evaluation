import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 10, seuil: 5 }), 'A1 — Vis : 10 u');
});

test('formaterLigne affiche l\'unité fournie', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 1, unite: 'kg' }), 'A1 — Vis : 3 kg');
});

test('formaterLigne signale un produit en alerte', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5 }), 'A1 — Vis : 3 u ⚠');
});

test('formaterLigne signale un produit dont la quantité égale le seuil', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 5, seuil: 5 }), 'A1 — Vis : 5 u ⚠');
});
