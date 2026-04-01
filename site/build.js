#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PLUGINS_DIR = path.join(__dirname, '..', 'plugins');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');
const OUTPUT_PATH = path.join(__dirname, 'index.html');

const CATEGORY_ORDER = ['Product Management', 'Development', 'Onboarding'];

function categorySort(a, b) {
  const ai = CATEGORY_ORDER.indexOf(a);
  const bi = CATEGORY_ORDER.indexOf(b);
  if (ai !== -1 && bi !== -1) return ai - bi;
  if (ai !== -1) return -1;
  if (bi !== -1) return 1;
  return a.localeCompare(b);
}

function titleFromName(name) {
  // Remove known category prefixes
  const withoutPrefix = name.replace(/^(pm-|dev-|onboard-)/, '');
  return withoutPrefix
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function categoryId(category) {
  return category.toLowerCase().replace(/\s+/g, '-');
}

function buildCard(plugin) {
  const title = titleFromName(plugin.name);
  const keywords = (plugin.keywords || []).map(k => `        <span class="tag">${k}</span>`).join('\n');
  const versionTag = `        <span class="tag">v${plugin.version}</span>`;
  const categoryLabel = plugin.category.toUpperCase();

  return `      <div class="skill-card reveal">
        <div class="card-category">${categoryLabel}</div>
        <h3>${title}</h3>
        <p>${plugin.description}</p>
        <div class="card-footer">
${keywords}
${versionTag}
        </div>
      </div>`;
}

function buildCategorySection(category, plugins) {
  const id = categoryId(category);
  const cards = plugins.map(buildCard).join('\n');
  return `    <h3 class="category-header reveal" id="cat-${id}">${category}</h3>
    <div class="card-grid">
${cards}
    </div>`;
}

// Scan plugins
const pluginDirs = fs.readdirSync(PLUGINS_DIR).filter(name => {
  const stat = fs.statSync(path.join(PLUGINS_DIR, name));
  return stat.isDirectory();
});

const plugins = [];
for (const dir of pluginDirs) {
  const jsonPath = path.join(PLUGINS_DIR, dir, '.claude-plugin', 'plugin.json');
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    plugins.push(data);
  }
}

// Group by category
const byCategory = {};
for (const plugin of plugins) {
  const cat = plugin.category || 'Uncategorized';
  if (!byCategory[cat]) byCategory[cat] = [];
  byCategory[cat].push(plugin);
}

// Sort categories
const sortedCategories = Object.keys(byCategory).sort(categorySort);

// Sort plugins within each category alphabetically by name
for (const cat of sortedCategories) {
  byCategory[cat].sort((a, b) => a.name.localeCompare(b.name));
}

// Generate HTML
const sections = sortedCategories.map(cat => buildCategorySection(cat, byCategory[cat]));
const catalogHtml = sections.join('\n\n');

// Read template and replace placeholder
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
const output = template.replace('<!-- SKILLS_CATALOG -->', catalogHtml);

// Write output
fs.writeFileSync(OUTPUT_PATH, output, 'utf8');

const totalPlugins = plugins.length;
const totalCategories = sortedCategories.length;
console.log(`Built site/index.html with ${totalPlugins} plugins in ${totalCategories} categories.`);
