import { Typography, Stack } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const Result = ({ data }) => {
  const { homeValue,  loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; //60 months = 5 years
  const interestRatePerMonth = interestRate / 100 / 12; // 100 @ 12% for 1 year = 1% per month

  const monthlyPayment =
    (loanAmount * interestRatePerMonth) /
    (1 - Math.pow(1 + interestRatePerMonth, -totalLoanMonths));

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  ChartJS.register(ArcElement, Tooltip, Legend);
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  //console.log(downPayment)
  //console.log(loanAmount)
  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: £ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
