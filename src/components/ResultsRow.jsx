import { formatter } from "../util/investment"

export default function ResultsRow({ calculatedResult, totalInterest }) {

    const totalAmountInvestment = calculatedResult.valueEndOfYear - totalInterest

    return (
        <tr>
            <td>{ calculatedResult.year }</td>
            <td>{ formatter.format(calculatedResult.valueEndOfYear) }</td>
            <td>{ formatter.format(calculatedResult.interest) }</td>
            <td>{ formatter.format(totalInterest) }</td>
            <td>{ formatter.format(totalAmountInvestment) }</td>
        </tr>
    )
}