import { translationResources } from '../src/i18n';

const languages = ['fr', 'es'] as const;
const englishEntries = Object.entries(translationResources.en);
const missing: string[] = [];
const placeholderPattern = /{{\\s*([\\w.-]+)\\s*}}/g;

function placeholders(value: string): string[] {
  return [...value.matchAll(placeholderPattern)].map((match) => match[1]).sort();
}

for (const language of languages) {
  const target = translationResources[language] as Record<string, string>;

  for (const [key, englishValue] of englishEntries) {
    const translatedValue = target[key];

    if (typeof translatedValue !== 'string' || translatedValue.trim() === '') {
      missing.push(`[${language}] Missing translation: "${key}"`);
      continue;
    }

    const expectedPlaceholders = placeholders(englishValue);
    const actualPlaceholders = placeholders(translatedValue);

    if (expectedPlaceholders.join('|') !== actualPlaceholders.join('|')) {
      missing.push(
        `[${language}] Placeholder mismatch for "${key}": expected ${JSON.stringify(expectedPlaceholders)}, received ${JSON.stringify(actualPlaceholders)}`,
      );
    }
  }
}

if (missing.length > 0) {
  console.error(`Translation audit failed: ${missing.length} issue(s) across ${englishEntries.length} English keys.`);
  for (const issue of missing) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(
    `Translation audit passed: all ${englishEntries.length} English semantic keys have French and Spanish values with matching interpolation placeholders.`,
  );
}
