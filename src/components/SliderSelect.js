import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bankLimit = 10000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bankLimit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit="£"
        amount={data.homeValue}
        reverseOrder={true}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: (data.homeValue - value),
            downPayment: value,
          })
        }
        unit="£"
        amount={data.downPayment}
        reverseOrder={true}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: (data.homeValue - value),
          loanAmount:value,
        })}
        unit="£"
        amount={data.loanAmount}
        reverseOrder={true}
      />
      <SliderComponent
        label="Interst Rate"
        min={2}
        max={18}
        defaultValue={data.interstRate}
        value = {data.interstRate}
        step={0.5}
        onChange={(e, value) =>setData({
          ...data,
          interstRate:value,
         })}
        unit="%"
        amount={data.interstRate}
       
        reverseOrder={false}
      />
    </>
  );
};

export default SliderSelect;
