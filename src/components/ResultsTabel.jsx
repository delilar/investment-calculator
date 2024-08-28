import { calculateInvestmentResults } from "../util/investment"
import ResultsRow from "./ResultsRow"

export default function ResultsTable({ investmentData }) {

    const investmentResults = calculateInvestmentResults(investmentData);
    let accumulatedInterest = 0;

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody> 
                {investmentResults.map((data) => {
                    accumulatedInterest += data.interest;
                    return (
                        <ResultsRow 
                            key={data.year} 
                            calculatedResult={data} 
                            totalInterest={accumulatedInterest} 
                        />
                    );
                })}
            </tbody>
        </table>
    )
}