import { View, Text } from "react-native";
import React from "react";
import { FeedHeaderStories } from "../FeedHeaderStories";
import FeedHeaderTab from "../FeedHeaderTab";

const FeedHeader = () => {
  return (
    <>
      <FeedHeaderTab />
      <FeedHeaderStories />
    </>
  );
};

export { FeedHeader };
