import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { Logo } from ".";

export default {
  title: "components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => (
  <StoryContainer>
    <Logo />
  </StoryContainer>
);

export const Main = Template.bind({});
