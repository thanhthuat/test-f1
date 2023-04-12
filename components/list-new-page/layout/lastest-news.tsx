import React, { useState } from "react";
import LastestNewsItem from "./lastest-news-item";
import LiveNews from "@components/common/liveNews/liveNews";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppSelector } from "@hook/hooks";
type Props = {};

const LastestNews = (props: Props) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  const [page, setPage] = useState<number>(5);
  const handleLoadMore = () => {
    if (topmovie.length > page) {
      setPage(page + 5);
    }
  };

  return (
    <section className="box-1">
      <article>
        {topmovie.slice(0, page).map((item, index) => {
          return <LastestNewsItem item={item} key={item.id} />;
        })}
        <button
          className="more-new-btn"
          onClick={handleLoadMore}
          disabled={page >= topmovie.length}
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
