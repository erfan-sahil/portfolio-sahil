import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
export function Projects() {
  const data = [
    {
      label: "Movie Arc",
      value: "MovieArc",
    },
  ];

  return (
    //
    <div
      id="skills"
      className="bg-[#fdfcf6] flex justify-center items-center px-8 pt-28 xl:pt-0 pr-[80px] xl:pr-[250px]"
    >
      <div className="flex flex-col w-full xl:w-2/3">
        <h1
          className="mr-4 cursor-pointer py-1.5 font-medium text-4xl mb-2 xl:mb-5"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Porjects
        </h1>

        <div className=" gap-3 flex flex-col xl:flex-row items-center justify-start">
          <Card className="w-1/2 xl:w-2/12 bg-[#fdfcf6] rounded-none shadow-none border-dashed border-2 border-gray-500">
            <Typography
              color="blue-gray"
              style={{ fontFamily: "Caudex, serif" }}
              className="flex font-medium text-lg justify-center items-center p-4 gap-[5px]"
            >
              <a href="https://movie-arc-zzik.vercel.app/">Movie Arc</a>
            </Typography>
          </Card>
          <Card className="w-1/2 xl:w-2/12 bg-[#fdfcf6] rounded-none shadow-none border-dashed border-2 border-gray-500">
            <Typography
              color="blue-gray"
              style={{ fontFamily: "Caudex, serif" }}
              className="flex font-medium text-lg justify-center items-center p-4 gap-[5px]"
            >
              <a href="https://hidayah-vgt2.vercel.app/">Hidayah</a>
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  );
}
