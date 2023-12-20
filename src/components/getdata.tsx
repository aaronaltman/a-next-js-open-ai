"use server";

import React from "react";

const url = "https://wp.flackinjurylaw.com/wp-json/wp/v2/posts/47";
export default async function GetData() {
  const res = await fetch(url);
  const data = await res.json();

  type Data = {
    date: string;
    content: {
      rendered: string;
    };
  };
  return (
    <main>
      <section className="">
        <h1 className="p-4 ">{data.date}</h1>
        <p className="p-8">{data.content.rendered}</p>
      </section>
    </main>
  );
}
