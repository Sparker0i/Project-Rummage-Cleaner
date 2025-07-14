export const INVISIBLE_CHARS: Record<string, string> = {
  'Zero Width Space': '\u200B',
  'Zero Width Non-Joiner': '\u200C',
  'Zero Width Joiner': '\u200D',
  'Byte Order Mark': '\uFEFF',
  'Soft Hyphen': '\u00AD',
  'Left-to-Right Mark': '\u200E',
  'Right-to-Left Mark': '\u200F',
  'Left-to-Right Embedding': '\u202A',
  'Right-to-Left Embedding': '\u202B',
  'Pop Directional Formatting': '\u202C',
  'Left-to-Right Override': '\u202D',
  'Right-to-Left Override': '\u202E',
  'Zero Width No-Break Space': '\uFEFF',
  'Word Joiner': '\u2060',
  'Invisible Separator': '\u2063',
  'Invisible Plus': '\u2064',
  'Left-to-Right Isolate': '\u2066',
  'Right-to-Left Isolate': '\u2067',
  'First Strong Isolate': '\u2068',
  'Pop Directional Isolate': '\u2069',
  'Function Application': '\u2061',
  'Invisible Times': '\u2062',
  'Mongolian Vowel Separator': '\u180E',
  'Arabic Letter Mark': '\u061C'
};

export const REPLACEABLE_CHARS: Record<string, string> = {
  'Right Single Quotation Mark': '\u2019',
  'Left Single Quotation Mark': '\u2018',
  'Left Double Quotation Mark': '\u201C',
  'Right Double Quotation Mark': '\u201D',
  'Horizontal Ellipsis': '\u2026',
  'Em Dash': '\u2014',
  'En Dash': '\u2013',
  'Figure Dash': '\u2012',
  'Minus Sign': '\u2212',
  'Hyphen-Minus': '\u002D'
};

export const CHAR_REPLACEMENTS: Record<string, string> = {
  '\u2019': "'", // Right Single Quotation Mark → apostrophe
  '\u2018': "'", // Left Single Quotation Mark → apostrophe
  '\u201C': '"', // Left Double Quotation Mark → quote
  '\u201D': '"', // Right Double Quotation Mark → quote
  '\u2026': '...', // Horizontal Ellipsis → three dots
  '\u2014': '--', // Em Dash → double hyphen
  '\u2013': '-', // En Dash → hyphen
  '\u2012': '-', // Figure Dash → hyphen
  '\u2212': '-', // Minus Sign → hyphen
  '\u002D': '-' // Hyphen-Minus → hyphen (redundant but for completeness)
};

export const generateControlChars = (): Record<string, string> => {
  const controlChars: Record<string, string> = {};
  const preservedChars = [9, 10, 13]; // tab, LF, CR
  
  for (let i = 0; i <= 31; i++) {
    if (!preservedChars.includes(i)) {
      controlChars[`Control Character U+${i.toString(16).padStart(4, '0').toUpperCase()}`] = String.fromCharCode(i);
    }
  }
  
  for (let i = 127; i <= 159; i++) {
    controlChars[`Control Character U+${i.toString(16).padStart(4, '0').toUpperCase()}`] = String.fromCharCode(i);
  }
  
  return controlChars;
};

export const ALL_CHARS_TO_REMOVE = { ...INVISIBLE_CHARS, ...generateControlChars() };
export const ALL_CHARS_TO_REPLACE = { ...REPLACEABLE_CHARS };
export const ALL_CHARS = { ...INVISIBLE_CHARS, ...REPLACEABLE_CHARS, ...generateControlChars() };