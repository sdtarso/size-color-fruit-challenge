"use client";

import { LazyImage } from "@/components/atoms";
import { PageHeader } from "@/components/organisms";

export default function SizeFruitColor() {
  const src = "https://via.placeholder.com/100";
  return (
    <div className="px-4">
      <PageHeader title="Lazy Load Image" />
      <p className="mb-4">
        This is just a simples component that lazy load images with the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          target="_blank"
        >
          IntersectionObserverApi
        </a>
        .
      </p>
      <p className="mb-4">
        Given that this repo is made with Next.js, It&apos;s way easier to just
        use the Next Image Component, since it already have a built-in lazy load
        and other important features. You can read more{" "}
        <a
          className="underline"
          href="https://nextjs.org/learn/seo/improve/images"
        >
          here
        </a>
        . <br />
        But for demo purposes, We&apos;ll create our own Lazy load Component.
      </p>
      <div className="grid grid-cols-tiles gap-2 auto-rows-[256px]">
        {Array.from({ length: 16 }).map((v, i) => (
          <LazyImage key={i} src={src} />
        ))}
      </div>
    </div>
  );
}
