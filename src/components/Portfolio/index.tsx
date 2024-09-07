import { useState, useEffect } from 'react';
import { PortfolioData } from "../../types/portfolioData";
import { importAll } from "../../utils/importAll";
import Card from "../Card";

const Portfolio: React.FC = () => {
    const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);

    useEffect(() => {
        importAll().then((data: PortfolioData[]) => {
            setPortfolios(data);
        });
    }, []);

    return (
        <div>
            {portfolios.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </div>
    );
};

export default Portfolio;