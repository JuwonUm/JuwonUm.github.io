// src/lib/getProfileImages.ts
import fs from 'fs';
import path from 'path';

export function getProfileImages(): string[] {
  const dir = path.resolve('./public/profiles');
  const files = fs.readdirSync(dir);
  return files
    .filter(file => /\.(png|jpe?g|webp)$/i.test(file))
    .map(file => `/profiles/${file}`);
}
