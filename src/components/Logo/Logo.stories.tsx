import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Logo } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/Logo",
  component: Logo,
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = () => (
  <StoryContainer>
    <Logo />
  </StoryContainer>
);

export const Main = Template.bind({});
