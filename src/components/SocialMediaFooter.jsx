import { Card, Typography } from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.css";

export function SocialMediaFooter() {
  return (
    <div className="bg-[#fdfcf6] pt-14 px-8 pr-[80px] xl:pr-[250px]">
      <div className=" gap-3 flex flex-col xl:flex-row items-center justify-center">
        <Card className="w-1/2 xl:w-2/12 bg-[#fdfcf6] rounded-none shadow-none border-dashed border-2 border-gray-500">
          <Typography
            color="blue-gray"
            style={{ fontFamily: "Caudex, serif" }}
            className="flex font-medium text-lg justify-center items-center p-4 gap-[5px]"
          >
            <p className="">Facebook</p>
            <a href="https://www.facebook.com/mderfanulislam.sahil.3/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-[#585651]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </a>
          </Typography>
        </Card>
        <Card className="w-1/2 xl:w-2/12 bg-[#fdfcf6] rounded-none shadow-none border-dashed border-2 border-gray-500">
          <Typography
            color="blue-gray"
            style={{ fontFamily: "Caudex, serif" }}
            className="flex font-medium text-lg justify-center items-center p-4 gap-[5px]"
          >
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/erfan-sahil-5615881a0/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-[#585651]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </a>
          </Typography>
        </Card>
        <Card className="w-1/2 xl:w-2/12 bg-[#fdfcf6] rounded-none shadow-none border-dashed border-2 border-gray-500">
          <Typography
            color="blue-gray"
            style={{ fontFamily: "Caudex, serif" }}
            className="flex font-medium text-lg justify-center items-center p-4 gap-[5px]"
          >
            <a>Github </a>
            <a href="https://github.com/erfan-sahil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-[#585651]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </a>
          </Typography>
        </Card>
      </div>
      <footer
        className="font-semibold text-lg text-center mt-10 xl:mt-16"
        style={{ fontFamily: "Caudex, serif" }}
      >
        {" "}
        ©2024 erfansahil{" "}
      </footer>
    </div>
  );
}
