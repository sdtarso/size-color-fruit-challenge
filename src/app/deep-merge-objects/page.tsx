"use client";

import { OrderedList } from "@/components/molecules";
import { PageHeader } from "@/components/organisms";
import { deepMerge, printObject } from "@/utils";
import { obj1, obj2 } from "./data";
import { BlockCode, PrimaryButton } from "@/components/atoms";
import { useState } from "react";

export default function DeepMergeObjects() {
  const [result, setResult] = useState<any>({});
  const handleClick = () => {
    setResult(deepMerge(obj1, obj2));
  };
  return (
    <div className="p-4">
      <PageHeader
        title="Deep Merge Objects"
        path="hoc/withPageModifiers.tsx"
      />
      <p className="mb-4">
        must create a function in JavaScript that performs a deep merge of two
        objects. The function should combine the properties of the two objects,
        including nested properties, into a new object.
      </p>
      <h5 className="font-semibold text-lg">Requiriments</h5>
      <OrderedList>
        <li>The function should take N parameters, but always objects.</li>
        <li>
          The function should return a new object that combines the properties
          of two parameters.
        </li>
        <li>
          If a property is present in many objects, the value of the property in
          the last parameter should overwrite the value in previous.
        </li>
        <li>
          If a property is an object and is present in many parameters, the
          function should recursively merge them.
        </li>
        <li>If the property is a number, sum the values</li>
        <li>
          If the property is an array, concat (Give the option of keep
          duplicateds)
        </li>
      </OrderedList>
      <div className="grid md:grid-cols-3 gap-8 justify-between">
        <div className="text-center mt-4 col-span-3">
          <PrimaryButton handleClick={handleClick}>Merge</PrimaryButton>
        </div>
        <BlockCode>
          <p>Input 1</p>
          <hr className="my-2" />
          {printObject(obj1)}
        </BlockCode>
        <BlockCode>
          <p>Input 2</p>
          <hr className="my-2" />
          {printObject(obj2)}
        </BlockCode>
        <BlockCode>
          <p>Output</p>
          <hr className="my-2" />
          {printObject(result)}
        </BlockCode>
      </div>
    </div>
  );
}
