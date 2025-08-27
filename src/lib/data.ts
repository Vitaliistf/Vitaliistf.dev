import { promises as fs } from 'fs';
import path from 'path';

export async function getPortfolioData() {
  const filePath = path.join(process.cwd(), 'src/data/portfolio.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getExperienceData() {
  const filePath = path.join(process.cwd(), 'src/data/experience.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getLinksData() {
  const filePath = path.join(process.cwd(), 'src/data/links.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}
