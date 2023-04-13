import React, { useState } from "react";
import LastestNewsItem from "./lastest-news-item";
import LiveNews from "@components/common/liveNews/liveNews";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
type Props = {};

const LastestNews = (props: Props) => {
  const { topmovie, page } = useAppSelector((state) => state.movie);
  const [page1, setPage] = useState<number>(5);
  const dispatch = useAppDispatch();

  //  useEffect(() => {
  //    if (topmovie.length === 0) {

  //    }

  //    return () => {};
  //  }, []);
  const handleLoadMore = () => {
    if (topmovie.length > page1) {
      setPage(page1 + 5);
    } else {
      dispatch(getListTop({ page: page + 1 }));
      setPage(5);
    }
  };

  return (
    <section className="box-1">
      <article>
        {topmovie.slice(0, page1).map((item, index) => {
          return <LastestNewsItem item={item} key={item.id} />;
        })}
        <button
          className="more-new-btn"
          onClick={handleLoadMore}
          // disabled={page1 >= topmovie.length}
        >
          <span>More</span>
          <KeyboardArrowDownIcon />
        </button>
      </article>
      <aside>
        <LiveNews />
      </aside>
    </section>
  );
};

export default LastestNews;
