import React from "react";
import type { StoryFn, Meta } from "@storybook/react";
import { Icon, iconsList } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/Icon",
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = args => (
  <StoryContainer>
    <Icon {...args} width="50" height="50" />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  name: "Github",
  className: "text-white",
};

Main.argTypes = {
  name: {
    options: Object.keys(iconsList),
    control: { type: "select" },
  },
};
