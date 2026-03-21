import classNames from "classnames";
import { useTheme } from "../../context/theme";
import { Button } from "../Button";
import { Flex } from "../Layout/Flex";
import "./top-menu.css";
import { CodeIcon } from "../Icon";

export function TopMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Flex className='top-menu' alignItems='center' justifyContent='center' gap={4}>
      <Button className='theme-button' icon onClick={toggleTheme}>
        <div class='theme-button-inner'>
          {renderValue("sun", "🌝", { active: theme === "light" })}
          {renderValue("moon", "🌚", { active: theme === "dark" })}
        </div>
      </Button>
      <Button href='https://github.com/Ruminat/cv' target='_blank'>
        <CodeIcon size={18} />
        Code
      </Button>
    </Flex>
  );
}

function renderValue(className: string, icon: string, { active = false } = {}) {
  return (
    <Flex alignItems='center' justifyContent='center' className={classNames("theme-value", className, { active })}>
      <Flex alignItems='center' justifyContent='center' width='24px' height='24px'>
        {icon}
      </Flex>
    </Flex>
  );
}
