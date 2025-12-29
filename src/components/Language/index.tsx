import { Flex } from "../Layout/Flex";
import { text } from "../Typography";

export function Language({ language, level, icon }: { language: string; level: string; icon: string }) {
  return (
    <Flex alignItems='center' gap={2}>
      <img src={icon} width='16px' /> {text(`${language} (${level})`)}
    </Flex>
  );
}
