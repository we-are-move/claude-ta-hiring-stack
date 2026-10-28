// Usage: node build_scorecard.js <config.json> <out.html>
// Fills the scorecard template with the role config. The template and logo sit next to this script.
const fs = require('fs'), path = require('path');
const [cfgPath, outPath] = process.argv.slice(2);
if (!cfgPath || !outPath) { console.error('Usage: node build_scorecard.js config.json out.html'); process.exit(1); }
const dir = __dirname;
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const need = ['role', 'brief', 'profiles'];
for (const k of need) if (!cfg[k]) throw new Error('Config is missing "' + k + '"');
cfg.profiles.forEach((p, i) => {
  for (const k of ['id', 'name', 'title', 'company', 'url', 'tier']) if (p[k] == null || p[k] === '') throw new Error('Profile ' + (i + 1) + ' is missing "' + k + '"');
  if (!/^https:\/\/([a-z]+\.)?linkedin\.com\//.test(p.url)) throw new Error('Profile ' + p.name + ' URL is not a LinkedIn URL');
  if (![1, 2, 3].includes(p.tier)) throw new Error('Profile ' + p.name + ' tier must be 1, 2 or 3');
  if (!p.context) throw new Error('Profile ' + p.name + ' needs "context": what they do in their current role, so scorers can judge projects and skills');
  if (p.context.split(/\s+/).length > 60) throw new Error('Profile ' + p.name + ' context is over 60 words; shorten it');
});
const firms = cfg.profiles.map(p => p.company.trim().toLowerCase());
const dupes = firms.filter((f, i) => firms.indexOf(f) !== i);
if (dupes.length) throw new Error('Two profiles share a current employer (' + dupes.join(', ') + '). Each of the six needs a different current employer.');
const ids = new Set(cfg.profiles.map(p => p.id));
if (ids.size !== cfg.profiles.length) throw new Error('Profile ids must be unique');
cfg.slug = cfg.slug || (cfg.company + '-' + cfg.role).toLowerCase().replace(/[^a-z0-9]+/g, '-');
const title = (cfg.title || ((cfg.company ? cfg.company + ' ' : '') + 'Calibration')).replace(/[<&]/g, '');
const data = JSON.stringify(cfg).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, c => '\\u' + c.charCodeAt(0).toString(16));
let html = fs.readFileSync(path.join(dir, 'scorecard_template.html'), 'utf8');
html = html.replace('__TITLE__', () => title)
  .replace('__LOGO__', () => fs.readFileSync(path.join(dir, 'move_logo.b64'), 'utf8').trim())
  .replace('__DATA__', () => data);
fs.writeFileSync(outPath, html);
console.log('Wrote ' + outPath + ' (' + Math.round(html.length / 1024) + ' KB, ' + cfg.profiles.length + ' profiles)');
