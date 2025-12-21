import { Flex } from "../Layout/Flex";
import { text } from "../Typography";

export function EducationPeriod({ period, specialty }: { period: string; specialty: string }) {
  return (
    <Flex direction='column' gap={2}>
      {text(period)}
      {text(specialty, { color: "hint", size: "small" })}
    </Flex>
  );
}
