import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navigation } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => (
  <StoryContainer>
    <Navigation />
  </StoryContainer>
);

export const Main = Template.bind({});
