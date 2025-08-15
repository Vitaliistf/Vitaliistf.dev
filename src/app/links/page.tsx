import { getLinksData } from '@/lib/data';
import LinksClient from '@/components/LinksClient';

export default async function LinksPage() {
  const linksData = await getLinksData();

  return <LinksClient linksData={linksData} />;
}