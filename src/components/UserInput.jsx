import { useEffect, useState } from "react";
import Input from "./Input";


export default function UserInput({ setInvestmentData }) {

    const [formData, setFormData] = useState(
        {
            initialInvestment: 15000,
            annualInvestment: 200,
            expectedReturn: 5.5,
            duration: 6
        }
    )

    function handleInputChange(name, value) {
        if (value < 0) {
          alert("Value cannot be negative");
          return;
        }
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }

    useEffect(() => setInvestmentData(formData), [formData, setInvestmentData])


    return (
    <>
        <section id="user-input">
            <div className="input-group">
                <Input label="Initial Investments" name="initialInvestment" dataForCalculating={ handleInputChange } startData={ formData.initialInvestment } />
                <Input label="Annual Investments" name="annualInvestment" dataForCalculating={ handleInputChange } startData={ formData.annualInvestment } />
            </div>
            <div className="input-group">
                <Input label="Expected Return" name="expectedReturn" dataForCalculating={ handleInputChange } startData={ formData.expectedReturn } />
                <Input label="Duration" name="duration" dataForCalculating={ handleInputChange } startData={ formData.duration } />
            </div>
        </section>
    </>
    )
}