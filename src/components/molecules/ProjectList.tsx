import { Tile, TileInterface } from "../atoms";

interface ProjectList {
  projects: TileInterface[];
}
export const ProjectList = ({ projects }: ProjectList) => {
  return (
    <>
      <h2 className="text-3xl font-medium mb-6">Challenges on this project</h2>
      <div className="grid grid-cols-tiles auto-rows-tiles gap-4 justify-center container">
        {projects.map((item, key) => (
          <Tile key={key} {...item} />
        ))}
      </div>
    </>
  );
};
