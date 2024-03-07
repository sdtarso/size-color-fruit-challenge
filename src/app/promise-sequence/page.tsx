"use client";

import { PrimaryButton } from "@/components/atoms";
import { OrderedList } from "@/components/molecules";
import { PageHeader } from "@/components/organisms";
import { useState } from "react";
import Loading from "../loading";

export default function SizeFruitColor() {
  const [loading, setLoading] = useState(false);
  const mockAsync = (data: string[]) => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve([...data, `Appended Data: ${data.length}`]);
      }, 100);
    });
  };

  const requests = [mockAsync, mockAsync, mockAsync];

  const handleSequence = (
    requests: ((data: string[]) => Promise<string[]>)[]
  ) => {
    let result = Promise.resolve(["Initial Data"]);

    requests.forEach((task) => {
      result = result.then((r) => task(r));
    });

    return result;
  };

  const handleClick = () => {
    setLoading(true);
    handleSequence(requests)
      .then((response) => {
        setLoading(false);
        alert(`Resquests finished: ${response.join(", ")}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="px-4">
      <PageHeader title="Promise Sequence" path="app/promise-sequence/page.tsx" />
      <OrderedList>
        <li>
          Create a function that takes an array of functions as its parameter.
        </li>
        <li>
          Each function in the array should represent a transformation to be
          applied to the object.
        </li>
        <li>
          The functions should be executed in the order they appear in the
          array, with the output of one function serving as the input to the
          next.
        </li>
        <li>
          The input object should be passed through the entire pipeline, and the
          final result should be returned.
        </li>
      </OrderedList>
      <div className="text-center">
        <PrimaryButton handleClick={handleClick}>Magicaly Fetch</PrimaryButton>
        {loading && <Loading />}
      </div>
    </div>
  );
}
