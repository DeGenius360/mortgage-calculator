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
            homeValue: value,
          })
        }
        unit="£"
        amount={data.homeValue}
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
            downPayment: value,
          })
        }
        unit="£"
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={1250}
        defaultValue={20}
        step={5}
        onChange={(e) => console.log(e.target.value)}
        unit="£"
        amount={700}
      />
      <SliderComponent
        label="Interst Rate"
        min={0}
        max={1250}
        defaultValue={20}
        step={5}
        onChange={(e) => console.log(e.target.value)}
        unit="£"
        amount={700}
      />
    </>
  );
};

export default SliderSelect;
