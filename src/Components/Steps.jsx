import React from 'react';
import {
  StepStatus,
  Timeline,
} from "@gjensidige/core-components/lib/step-indicators";

const Steps = () => {
  const steps = [
    {
      description: "First step",
      additionalDescription: "Additional description",
      status: StepStatus.COMPLETED,
    },
    {
      description: "Second step",
      additionalDescription: "Extended description",
      status: StepStatus.COMPLETED,
    },
    {
      description: "Third step",
      additionalDescription: "Third description",
      status: StepStatus.NEXT,
    },
    {
      description: "Fourth step",
      additionalDescription: "4th description",
      status: StepStatus.SUBSEQUENT,
    },
    {
      description: "Final step",
      additionalDescription: "Last description",
      status: StepStatus.SUBSEQUENT,
    },
  ];
  return <Timeline steps={steps} variant="horizontal" />;
};

export default Steps;