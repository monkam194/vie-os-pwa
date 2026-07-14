const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const manifestPath = path.join(__dirname, '..', 'manifest.json');

test('manifest.json is valid JSON', () => {
  const raw = fs.readFileSync(manifestPath, 'utf8');
  assert.doesNotThrow(() => JSON.parse(raw));
});

test('manifest.json has required PWA fields', () => {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert.ok(manifest.name, 'name is required');
  assert.ok(manifest.short_name, 'short_name is required');
  assert.ok(manifest.start_url, 'start_url is required');
  assert.ok(Array.isArray(manifest.icons) && manifest.icons.length > 0, 'icons are required');
});

test('index.html has no leftover console.log', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.doesNotMatch(html, /console\.log\(/);
});
