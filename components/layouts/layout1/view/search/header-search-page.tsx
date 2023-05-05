import CardWithAuthorRow from "@components/common/card-author-row/card-author-row";
import CardWithAuthor from "@components/common/card-author/card-author";
import SearchBox from "@components/common/search/search";
import CaterogyList from "@components/common/slickCarousel/slickCarousel";
import { useAppDispatch } from "@hook/hooks";
import Divider from "@mui/material/Divider";
import { searchList } from "lib/redux/search-list/search-list.action";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface HeaderSearchPageProps {
  className?: string;
}

const HeaderSearchPage: React.FC<HeaderSearchPageProps> = ({ className = "" }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState((router.query?.search as string) || " ");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();
    if (value === "") return;
    router.replace(`/search/${value}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setValue((router.query?.search as string) || "");
    dispatch(searchList({ params: router.query?.search as string }));
    return () => {};
  }, [router.query?.search]);
  useEffect(() => {
    dispatch(searchList({ params: router.query?.search as string }));
  }, []);

  return (
    <div className={`${className} clsheadersearchpage`}>
      <div className={`${className} clsheadersearchpage-content`}>
        <div className={`${className} clsheadersearchpage-header`}>
          <h1 className={`${className} clsheadersearchpage-title`}> Search</h1>
        </div>
        <SearchBox value={value} onChange={handleChange} onSubmit={handleSubmit} />
        {/* <CaterogyList /> */}
        {/* <CardWithAuthorRow/> */}
        {/* <CardWithAuthor /> */}
        <Divider sx={{ margin: "10px 0px" }}></Divider>
      </div>
    </div>
  );
};

export default HeaderSearchPage;
