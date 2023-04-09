import HomeCompany from "@components/company/layout";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@hook/hooks";
import { fetchUsers } from "redux/add/user.action";

type Props = {};

const Index = (props: Props) => {
  const { entities } = useAppSelector((state) => state.user);
  console.log("🚀 ~ file: index.tsx:11 ~ Index ~ entities:", entities);
  const dispath = useAppDispatch();
  useEffect(() => {
    dispath(fetchUsers());
  },[]);
  return <HomeCompany />;
};
Index.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
export default Index;
