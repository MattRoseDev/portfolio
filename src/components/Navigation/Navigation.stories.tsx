import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { Navigation } from ".";

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
