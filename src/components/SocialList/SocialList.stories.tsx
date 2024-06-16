import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SocialList } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/SocialList",
  component: SocialList,
} as Meta<typeof SocialList>;

const Template: StoryFn<typeof SocialList> = () => (
  <StoryContainer>
    <SocialList />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "text-white",
};
