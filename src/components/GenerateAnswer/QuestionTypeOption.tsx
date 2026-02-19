"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const QuestionTypeOption = () => {
  const [select, setSelect] = useState(false);

  return (
    <>
      {/* LEFT: PDF PREVIEW */}
      {/* <div className="flex w-1/2 items-center justify-center overflow-auto bg-gray-200 p-8">
              <div className="flex h-[600px] w-[420px] items-center justify-center rounded-md bg-white shadow-xl">
                <span className="text-gray-400">PDF Preview Here</span>
              </div>
            </div> */}

      {/* RIGHT: QUESTION PANEL */}
      <div className="flex flex-col justify-center p-10">
        <h2 className="mb-6 text-2xl font-semibold">Pick a question type:</h2>

        <div className="space-y-4">
          <RadioGroup defaultValue="plus">
            <FieldLabel htmlFor="plus-plan">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle> Multiple-choice questions</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="plus" id="plus-plan" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="pro-plan">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>True-or-false questions</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="pro" id="pro-plan" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="enterprise-plan">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle> Open-ended questions</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="enterprise" id="enterprise-plan" />
              </Field>
            </FieldLabel>
          </RadioGroup>
          <Button className="w-full">Generate Questions →</Button>
        </div>
      </div>
    </>
  );
};

export default QuestionTypeOption;
