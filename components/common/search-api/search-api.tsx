import { useAppDispatch, useOnClickOutside } from "@hook/hooks";
import React from "react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { searchList } from "lib/redux/search-list/search-list.action";
import CardRow from "../card-row/card-row";
import { IresponeMovie } from "lib/models/interface";

export interface Notice {
  forename: string;
  date_of_birth: string;
  entity_id: string;
  nationalities: string[];
  name: string;
  _links: Links;
}

export interface Links {
  self: Images;
  images: Images;
  thumbnail: Images;
}

export interface Images {
  href: string;
}

const SearchApi = () => {
  const [notices, setNotices] = useState<IresponeMovie[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [searchDebouce, setSearchDebouce] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const typingTimeOut = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    if (notices.length != 0 || (notices.length == 0 && search && !loading)) {
      setNotices([]);
      setLoading(false);
      setSearch(null);
      setSearchDebouce("");
    }
  };
  useOnClickOutside(inputRef, clickOutsidehandler);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState((router.query?.search as string) || " ");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchDebouce(e.target.value);
    if (!Boolean(e.target.value)) {
      setLoading(false);
    }
    if (!loading && Boolean(e.target.value)) {
      setLoading(true);
    }
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };
  const handleRender = () => {
    if (notices.length == 0 && search && !loading) {
      return (
        <div className={search == null ? "clssearchapi-results nodisplay" : "clssearchapi-results"}>
          <p>Không tìm thấy kết quả chứa từ khóa của bạn</p>
        </div>
      );
    } else {
      return (
        <div
          className={
            notices.length == 0 ? "clssearchapi-results nodisplay" : "clssearchapi-results"
          }
        >
          {notices.map((item, index) => (
            <CardRow className="border mb-10 pd-10" item={item} key={`${index}-${item.title}`} />
          ))}
        </div>
      );
    }
  };
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setNotices([]);
      let res = await dispatch(searchList({ params: search as string }));
      setNotices(res.payload.data.results);
      setLoading(false);
    }
    if (search) fetchData();
  }, [search]);

  return (
    <div className="clssearchapi">
      <div className="clssearchapi-content" ref={inputRef}>
        <input
          className="clssearchapi-input"
          type="search"
          placeholder="Search"
          value={searchDebouce}
          onChange={handleChange}
        />

        {loading && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {handleRender()}
      </div>
    </div>
  );
};

export default SearchApi;
