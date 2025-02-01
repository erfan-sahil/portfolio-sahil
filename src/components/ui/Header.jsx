import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#header"
          className="flex items-center text-lg font-medium hover:text-[#838077]"
          style={{ fontFamily: "Caudex, serif" }}
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#skills"
          className="flex items-center text-lg font-medium hover:text-[#838077]"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Abillities
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#projects"
          className="flex items-center text-lg font-medium hover:text-[#838077]"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#userContact"
          className="flex items-center text-lg font-medium hover:text-[#838077]"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div id="header" className="max-h-[768px] w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8  bg-[#fdfcf6]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-5xl"
            style={{ fontFamily: "Caudex, serif" }}
          >
            Sahil
          </Typography>
          <div className="flex items-center gap-4">
            <div className=" hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
      <div className="bg-[#fdfcf6] flex justify-between w-full">
        <div className=" py-12 flex justify-center items-center px-8">
          <div className="w-full xl:w-2/3">
            <Typography className="text-xl font-semibold my-3">
              <h1
                className="font-medium text-4xl"
                style={{ fontFamily: "Caudex, serif" }}
              >
                Hey, I am Erfanul Islam Sahil
              </h1>
            </Typography>
            <Typography
              className="text-2xl font-medium"
              style={{ fontFamily: "Caudex, serif" }}
            >
              As a Software Engineer, I specialize in designing and developing
              scalable, efficient, and user-friendly software solutions. With a
              passion for clean code and problem-solving, I create robust
              applications that seamlessly integrate functionality, performance,
              and maintainability.
            </Typography>
          </div>
        </div>
        <div className="flex w-[80px] xl:w-[250px]">
          <div className="bg-[#f9a825] h-full xl:h-[350px] w-1/3 flex justify-center items-center">
            <p
              className="text-lg font-normal rotate-90"
              style={{ fontFamily: "Caudex, serif" }}
            >
              Skillset
            </p>
          </div>
          <div className="bg-[#d32f2f] h-full xl:h-[350px] w-1/3 flex justify-center items-center">
            <p
              className="text-lg font-normal rotate-90 "
              style={{ fontFamily: "Caudex, serif" }}
            >
              Efficiency
            </p>
          </div>
          <div className="bg-[#0277bd] h-full xl:h-[350px] w-1/3 flex justify-center items-center">
            <p
              className="text-lg font-normal rotate-90"
              style={{ fontFamily: "Caudex, serif" }}
            >
              Diligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
