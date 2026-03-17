const fs = require('fs');
const path = require('path');

const directories = ['src/components', 'src/pages'];

const replacements = {
  'blue-900': 'slate-900',
  'blue-800': 'slate-800',
  'blue-700': 'emerald-700',
  'blue-600': 'emerald-600',
  'blue-500': 'emerald-500',
  'blue-400': 'emerald-400',
  'blue-300': 'emerald-300',
  'blue-200': 'slate-200',
  'blue-100': 'slate-100',
  'blue-50': 'slate-50',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [key, value] of Object.entries(replacements)) {
        if (content.includes(key)) {
          content = content.split(key).join(value);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
