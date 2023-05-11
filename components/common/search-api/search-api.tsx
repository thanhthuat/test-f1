import { useAppDispatch } from "@hook/hooks";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
  const [loading, setLoading] = useState(false);
  const typingTimeOut = useRef<ReturnType<typeof setInterval> | null>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState((router.query?.search as string) || " ");
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
  //     e.preventDefault();
  //     if (value === "") return;
  //     router.replace(`/search/${value}`);
  //   };
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };
  //   useEffect(() => {
  //     setValue((router.query?.search as string) || "");
  //     dispatch(searchList({ params: router.query?.search as string }));
  //     return () => {};
  //   }, [router.query?.search]);
  //   useEffect(() => {
  //     dispatch(searchList({ params: router.query?.search as string }));
  //   }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!loading && e.target.value) {
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
      return <p>Không tìm thấy kết quả chứa từ khóa của bạn</p>;
    } else {
      return notices.map((item, index) => (
        <CardRow className="border" item={item} key={`${index}-${item.title}`} />
      ));
    }
  };
  useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);
      setNotices([]);
      let res = await dispatch(searchList({ params: search as string }));

      //   const data = await fetch(
      //     `https://ws-public.interpol.int/notices/v1/red?forename=${search}&resultPerPage=200`
      //   ).then((res) => res.json());
      setNotices(res.payload.data.results);
      setLoading(false);
    }
    if (search) fetchData();
  }, [search]);

  return (
    <div>
      <main>
        {" "}
        <input type="search" placeholder="Search" onChange={handleChange} />
        {loading && <p>Loading...</p>}
        {handleRender()}
      </main>
    </div>
  );
};

export default SearchApi;
