import { PortfolioData } from "../types/portfolioData";

export async function importAll(): Promise<PortfolioData[]> {
    const files = import.meta.glob('../portfolios/**/info.json');
    console.log(files);
    const data = await Promise.all(Object.values(files).map((file) => file()));
    console.log(data);
    return data.map((item: unknown) => item as PortfolioData);
}