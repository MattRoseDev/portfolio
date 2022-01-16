import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoryContainer } from "@stories/StoryContainer";
import { SocialList } from ".";

export default {
  title: "components/SocialList",
  component: SocialList,
} as ComponentMeta<typeof SocialList>;

const Template: ComponentStory<typeof SocialList> = () => (
  <StoryContainer>
    <SocialList />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  name: "github",
  className: "text-white",
};
