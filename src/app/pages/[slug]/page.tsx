"use server";

import React from "react";

const base_url = "https://wp.flackinjurylaw.com/wp-json/wp/v2/pages";

type params = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
};

export default async function PagesTemplate({ params }: { params: params }) {
  const res = await fetch(base_url);
  const data = await res.json();
  return (
    <div>
      {data.map((page) => (
        <div key={page.slug}>
          <h1 className="p-4 ">{page.title.rendered}</h1>
          <p className="p-8">{page.content.rendered}</p>
        </div>
      ))}
    </div>
  );
}
