import React from "react";
import { StoryContainer } from "@stories/StoryContainer";
import { Icon, iconsList } from ".";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => (
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
