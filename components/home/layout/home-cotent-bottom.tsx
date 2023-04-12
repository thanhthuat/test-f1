import StoryFeeds from "@components/storyFeeds/storyFeeds"
import React from "react";

type Props = {};

const HomeContentBottom = (props: Props) => {
  return (
    <section className="box-3">
      <StoryFeeds />
    </section>
  );
};

export default HomeContentBottom;
