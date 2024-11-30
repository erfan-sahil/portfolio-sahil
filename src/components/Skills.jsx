import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

export function Skills() {
  const data = [
    {
      label: "HTML 5",
      value: "html",
    },
    {
      label: "CSS 3",
      value: "css",
    },
    {
      label: "Tailwind",
      value: "tailwind",
    },
    {
      label: "JavaScript",
      value: "javascript",
    },
    {
      label: "React",
      value: "react",
    },
    {
      label: "Next JS",
      value: "nextJs",
    },
    {
      label: "Firebase",
      value: "firebase",
    },
  ];

  return (
    //
    <div
      id="projects"
      className="bg-[#fdfcf6] flex justify-center items-center px-8 pt-28 xl:pt-0 pr-[80px] xl:pr-[250px] lg:pb-20"
    >
      <div className="flex flex-col w-full xl:w-2/3">
        <h1
          className="mr-4 py-1.5 font-medium text-4xl mb-2 xl:mb-5"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Abilities
        </h1>
        <Tabs value="html" className=" xl:w-[70rem]">
          <TabsHeader
            className="bg-transparent flex flex-col xl:flex-row"
            indicatorProps={{
              className: "bg-[#fdfcf6] shadow-none !text-gray-900",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                className="font-medium text-xl cursor-default border-dashed border-2 border-b-gray-500 mx-3"
                style={{ fontFamily: "Caudex, serif" }}
                value={value}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
    </div>
  );
}
