import { getPortfolioData, getExperienceData } from '@/lib/data';
import PortfolioClient from '@/components/PortfolioClient';

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  const experienceData = await getExperienceData();

  return (
    <PortfolioClient 
      portfolioData={portfolioData}
      experienceData={experienceData}
    />
  );
}