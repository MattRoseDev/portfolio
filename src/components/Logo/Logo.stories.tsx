import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

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
