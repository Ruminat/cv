import { useCallback } from "preact/hooks";
import { Button } from "../Button";
import { Flex } from "../Layout/Flex";

export function Controls() {
  const onClickTheme = useCallback(() => {
    console.log("A");
  }, []);

  // const onClickTheme = useCallback(() => {
  //   console.log("A");
  // } ,[]);

  return (
    <Flex className='controls' alignItems='center' gap={4}>
      <Button onClick={onClickTheme}>Theme</Button>
      <Button>Code</Button>
    </Flex>
  );
}
