import { TileInterface } from "@/components/atoms";
import { ProjectList } from "@/components/molecules";

export default function Home() {
  const projects: TileInterface[] = [
    {
      name: "Size Color Fruit",
      path: "size-fruit-color",
      score: 5,
      time: 2,
    },
    {
      name: "Lazy Load Image Component",
      path: "lazy-load",
      score: 3,
      time: 1,
    },
    {
      name: "Deep Merge Objects",
      path: "deep-merge-objects",
      score: 5,
      time: 3,
    },
    {
      name: "Promise Sequence",
      path: "promise-sequence",
      score: 8,
      time: 2,
    },
    {
      name: "Page Modifiers HOC",
      path: "page-modifiers-hoc",
      score: 13,
      time: 16,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      <h1 className="text-4xl font-semibold mb-8">Tech Challenges</h1>
      <div className="mb-12 text-center">
        <p className="mb-4">
          <a
            className="underline"
            href="https://github.com/sdtarso/tech-challenge"
            target="_blakn"
          >
            This repo
          </a>{" "}
          has some challenges that i plan to do over time in order to improve my
          skills and test new patterns, tools and etc.
        </p>
        <p>
          The project itself is made with{" "}
          <a className="underline" href="https://nextjs.org/" target="_blank">
            Next.Js
          </a>
          ,{" "}
          <a className="underline" href="https://react.dev/" target="_blank">
            React.Js
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            TailwindCSS
          </a>
          .
        </p>
      </div>
      <ProjectList projects={projects} />
    </main>
  );
}
