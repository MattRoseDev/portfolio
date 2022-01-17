import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { Logo } from ".";

export default {
  title: "components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => (
  <StoryContainer>
    <Logo {...args} width="50" height="50" />
  </StoryContainer>
);

export const Main = Template.bind({});
