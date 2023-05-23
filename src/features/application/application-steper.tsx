import { IApplicationExtended } from '@/types/application'
import {
  Box,
  Card,
  CardBody,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from '@chakra-ui/react'
import { ApplicationCard } from './application-card'

type ApplicationStepperProps = {
  application: IApplicationExtended
}

const ApplicationStepper = ({ application }: ApplicationStepperProps) => {
  const { activeStep } = useSteps({
    index: application.steps.findIndex(({ current }) => current),
    count: application.steps.length,
  })

  return (
    <>
      <ApplicationCard application={application} />
      <Stepper index={activeStep} orientation="vertical" gap="0">
        {application.steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Card marginBottom={3} height={'auto'}>
              <CardBody paddingTop="1" paddingBottom="1">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.subtitle}</StepDescription>
                {activeStep >= index && (
                  <Box
                    marginBottom="2"
                    marginTop="2"
                    padding="2"
                    borderRadius="md"
                    bg="gray.200"
                  >
                    {step.description}
                  </Box>
                )}
              </CardBody>
            </Card>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  )
}

export default ApplicationStepper
