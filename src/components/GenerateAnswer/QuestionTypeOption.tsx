"use client";

import { Field, FieldContent, FieldLabel, FieldTitle } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { useGenerate } from "@/hooks/useGenerate";
import { mcqGenerate } from "@/lib/api/questionAns/mcqGenerate.api";

type props = {
  onGenerate: (type: string) => void;
};

const QuestionTypeOption = ({ onGenerate }: props) => {
  const { McqMutation } = useGenerate();

  // console.log(McqMutation);

  const generator = async () => {
    console.log("CLICKED");
    const abc = await McqMutation("e4f514eb-71aa-4135-ae2a-7ecdbc944689");
    console.log(abc);
  };

  return (
    <>
      <div className="animate-in fade-in flex flex-col justify-center p-10 duration-500">
        <h2 className="mb-6 text-2xl font-semibold">Pick a question type :</h2>
        <div className="space-y-4">
          <RadioGroup defaultValue="Multiple-choice">
            <FieldLabel htmlFor="multiple-choice">
              <Field
                orientation="horizontal"
                className="border-muted rounded-xl p-4 transition-all duration-200 hover:scale-[1.01] hover:shadow-sm"
              >
                <FieldContent>
                  <FieldTitle>Multiple-choice questions</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="multiple-choice" id="multiple-choice" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="true-or-false">
              <Field
                orientation="horizontal"
                className="border-muted rounded-xl p-4 transition-all duration-200 hover:scale-[1.01] hover:shadow-sm"
              >
                <FieldContent>
                  <FieldTitle>True-or-false questions</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="true-or-false" id="true-or-false" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="open-ended">
              <Field
                orientation="horizontal"
                className="border-muted rounded-xl p-4 transition-all duration-200 hover:scale-[1.01] hover:shadow-sm"
              >
                <FieldContent>
                  <FieldTitle> Open-ended questions</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="open-ended" id="open-ended" />
              </Field>
            </FieldLabel>
          </RadioGroup>
          <Button className="w-full" onClick={generator}>
            Generate Questions
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuestionTypeOption;
