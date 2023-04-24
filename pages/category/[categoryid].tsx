import MainLayout from "@components/layouts/layout1/HOC/main-layout";
import CategoryNew from "@components/layouts/layout1/caterogy/category-new";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <MainLayout>
      <CategoryNew />
    </MainLayout>
  );
};

export default Index;
