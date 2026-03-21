import type { ComponentChildren } from "preact";
import { Flex } from "../Layout/Flex";
import { Text } from "../Typography";

type Props = {
  icon?: string;
  title: string;
  date: string;
  githubLink: string;
  description: ComponentChildren;
};

const size = 32;

export function Project({ icon, title, date, githubLink, description }: Props) {
  return (
    <Flex gap={4}>
      {icon ? <img src={icon} alt={title} width={`${size}px`} height={`${size}px`} /> : null}

      <Flex direction='column' gap={1}>
        <Text>
          <a href={githubLink} target='_blank'>
            {title}
          </a>{" "}
        </Text>
        <Text size='small' color='hint'>
          {date}
        </Text>
        <Text size='small' color='hint'>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}
