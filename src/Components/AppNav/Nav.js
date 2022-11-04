import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  const [showMenu, setMenu] = useState(false);
  const [active, setActive] = useState("");

  return (
    <>
      <nav
        className={` bg-gray-900 md:bg-transparent
         md:flex flex-col justify-center items-center ${
           showMenu ? "flex" : "hidden"
         }  w-full h-screen  py-8  fixed z-[1001]  md:left-4 top-8 md:top-28 md:w-[5%] md:h-[57%] md:my-8 min-w-fit`}
      >
        <ul className=" bg-gray-900 md:rounded-full md:w-12  w-full py-3 md:py-0">
          <li className=" flex w-1/2 m-auto pt-12 md:pt-4  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex"}
              to={"/home"}
              onClick={() => {
                setActive("home");
              }}
            >
              <div>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.38171 18.0503V15.239C6.3817 14.5266 6.96099 13.9478 7.67852 13.9433H10.3132C11.0339 13.9433 11.6182 14.5234 11.6182 15.239V18.0421C11.6182 18.66 12.1203 19.1622 12.7427 19.1667H14.5401C15.3796 19.1688 16.1855 18.8392 16.7799 18.2507C17.3742 17.6621 17.7083 16.8629 17.7083 16.0294V8.0437C17.7083 7.37045 17.4077 6.73183 16.8875 6.29989L10.781 1.45142C9.7136 0.603372 8.18905 0.630768 7.15323 1.51661L1.17805 6.29989C0.633305 6.7191 0.307716 7.35961 0.291626 8.0437V16.0213C0.291626 17.7584 1.71006 19.1667 3.45978 19.1667H5.21623C5.51587 19.1688 5.80399 19.0522 6.01664 18.8426C6.2293 18.633 6.34889 18.3478 6.34888 18.0503H6.38171Z"
                    fill={active === "home" ? "#FACD66" : "#EFEEE0"}
                    fillOpacity={active !== "home" ? "0.25" : ""}
                  />
                </svg>
              </div>

              <p className="md:hidden text-white text-sm w-[100px] text-left ml-8">
                home
              </p>
            </NavLink>
          </li>

          <li className=" flex  w-1/2 m-auto  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to={"collection"}
              onClick={() => {
                setActive("collection");
              }}
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4166 0.681667C16.1233 0.599167 15.8208 0.5625 15.5 0.5625H4.49998C4.17915 0.5625 3.87665 0.599167 3.58331 0.681667C2.00665 1.09417 0.833313 2.53333 0.833313 4.22917V9.72917C0.833313 11.7458 2.48331 13.3958 4.49998 13.3958H15.5C17.5166 13.3958 19.1666 11.7458 19.1666 9.72917V4.22917C19.1666 2.53333 17.9933 1.09417 16.4166 0.681667ZM13.6666 5.17333V9.04167C13.6666 10.0867 12.8141 10.9392 11.7691 10.9392C10.7241 10.9392 9.87165 10.0867 9.87165 9.04167C9.87165 7.99667 10.7241 7.14417 11.7691 7.14417C11.9525 7.14417 12.1266 7.18083 12.2916 7.22667V6.07167L9.22081 6.90583V9.84833C9.22081 9.8575 9.22081 9.86667 9.21165 9.87583C9.20248 10.9117 8.34998 11.755 7.31415 11.755C6.26915 11.755 5.41665 10.9025 5.41665 9.84833C5.41665 8.79417 6.26915 7.95083 7.31415 7.95083C7.49748 7.95083 7.67165 7.9875 7.84581 8.03333V6.38333V4.9625C7.84581 4.17417 8.34081 3.5325 9.09248 3.33083L11.5216 2.66167C12.3008 2.45083 12.7958 2.6525 13.0708 2.86333C13.3458 3.07417 13.6666 3.48667 13.6666 4.3025V5.17333Z"
                  fill={active === "collection" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "collection" ? "0.25" : ""}
                />
              </svg>

              <p className="md:hidden text-white text-sm w-[100px] text-left ml-8">
                collection
              </p>
            </NavLink>
          </li>

          <li className=" flex w-1/2 m-auto  md:flex-col items-center bg justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to="videos"
              onClick={() => {
                setActive("videos");
              }}
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5833 0.583328H5.41665C5.17831 0.583328 4.94915 0.592495 4.72915 0.629162C2.36415 0.904162 0.833313 2.65499 0.833313 5.16666V11.5833C0.833313 14.3333 2.66665 16.1667 5.41665 16.1667H14.5833C17.3333 16.1667 19.1666 14.3333 19.1666 11.5833V5.16666C19.1666 2.41666 17.3333 0.583328 14.5833 0.583328ZM6.22331 10.6667C4.95831 10.6667 3.93165 9.63999 3.93165 8.37499C3.93165 7.10999 4.95831 6.08333 6.22331 6.08333C7.48831 6.08333 8.51498 7.10999 8.51498 8.37499C8.51498 9.63999 7.48831 10.6667 6.22331 10.6667ZM12.1816 10.8958H11.7233C11.3475 10.8958 11.0358 10.5842 11.0358 10.2083C11.0358 9.83249 11.3475 9.52083 11.7233 9.52083H12.1816C12.5575 9.52083 12.8691 9.83249 12.8691 10.2083C12.8691 10.5842 12.5575 10.8958 12.1816 10.8958ZM15.39 10.8958H14.9316C14.5558 10.8958 14.2441 10.5842 14.2441 10.2083C14.2441 9.83249 14.5558 9.52083 14.9316 9.52083H15.39C15.7658 9.52083 16.0775 9.83249 16.0775 10.2083C16.0775 10.5842 15.7658 10.8958 15.39 10.8958ZM15.39 7.22916H11.7233C11.3475 7.22916 11.0358 6.91749 11.0358 6.54166C11.0358 6.16583 11.3475 5.85416 11.7233 5.85416H15.39C15.7658 5.85416 16.0775 6.16583 16.0775 6.54166C16.0775 6.91749 15.7658 7.22916 15.39 7.22916Z"
                  fill={active === "videos" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "videos" ? "0.25" : ""}
                />
              </svg>

              <p className="md:hidden text-white text-sm w-[100px] text-left ml-8">
                videos
              </p>
            </NavLink>
          </li>

          <li className=" flex w-1/2 m-auto md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to="radio"
              onClick={() => {
                setActive("radio");
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3125 7.205H1.83337V14.8408C1.83337 14.8958 1.83337 14.9508 1.84254 14.9967H10.3125V7.205Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M16.2341 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2433 1.97084V5.80251C16.2433 5.81167 16.2341 5.82084 16.2341 5.83001Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0016 16.3717H16.2433V20.0292Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M1.99829 16.3717C2.42912 18.3333 3.73079 19.6167 5.70162 20.02V16.3717H1.99829Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
              </svg>
              <p className="md:hidden text-white text-sm w-[100px] text-left ml-8">
                radio
              </p>
            </NavLink>
          </li>
        </ul>

        <ul className="bg-gray-900 w-full  mt-0 md:mt-8 md:rounded-full md:w-12 m-auto md:h-auto py-3 md:py-0 pb-8">
          <li className=" flex w-1/2 m-auto md:pt-8  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to="/profile"
              onClick={() => {
                setActive("profile");
              }}
            >
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.83333C8.59837 1.83333 6.64587 3.78583 6.64587 6.18749C6.64587 8.54333 8.48837 10.45 10.89 10.5325C10.9634 10.5233 11.0367 10.5233 11.0917 10.5325C11.11 10.5325 11.1192 10.5325 11.1375 10.5325C11.1467 10.5325 11.1467 10.5325 11.1559 10.5325C13.5025 10.45 15.345 8.54333 15.3542 6.18749C15.3542 3.78583 13.4017 1.83333 11 1.83333Z"
                    fill={active === "profile" ? "#FACD66" : "#EFEEE0"}
                    fillOpacity={active !== "profile" ? "0.25" : ""}
                  />
                  <path
                    d="M15.6566 12.9708C13.0991 11.2658 8.9283 11.2658 6.35246 12.9708C5.1883 13.75 4.54663 14.8042 4.54663 15.9317C4.54663 17.0592 5.1883 18.1042 6.3433 18.8742C7.62663 19.7358 9.3133 20.1667 11 20.1667C12.6866 20.1667 14.3733 19.7358 15.6566 18.8742C16.8116 18.095 17.4533 17.05 17.4533 15.9133C17.4441 14.7858 16.8116 13.7408 15.6566 12.9708Z"
                    fill={active === "profile" ? "#FACD66" : "#EFEEE0"}
                    fillOpacity={active !== "profile" ? "0.25" : ""}
                  />
                </svg>
              </div>

              <p className="md:hidden text-white text-sm w-[100px] text-left ml-8">
                profile
              </p>
            </NavLink>
          </li>

          <li className=" flex w-1/2 m-auto  md:pt-4  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              onClick={() => {
                setActive("logout");
              }}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53498 0.833333C11.8107 0.833333 13.6666 2.6575 13.6666 4.90333V9.29417H8.07072C7.66967 9.29417 7.35257 9.60583 7.35257 10C7.35257 10.385 7.66967 10.7058 8.07072 10.7058H13.6666V15.0875C13.6666 17.3333 11.8107 19.1667 9.51633 19.1667H4.9743C2.6893 19.1667 0.833313 17.3425 0.833313 15.0967V4.9125C0.833313 2.6575 2.69862 0.833333 4.98363 0.833333H9.53498ZM15.9952 6.83768C16.2702 6.55352 16.7193 6.55352 16.9943 6.82852L19.671 9.49602C19.8085 9.63352 19.8818 9.80768 19.8818 10.0002C19.8818 10.1835 19.8085 10.3668 19.671 10.4952L16.9943 13.1627C16.8568 13.3002 16.6735 13.3735 16.4993 13.3735C16.316 13.3735 16.1327 13.3002 15.9952 13.1627C15.7202 12.8877 15.7202 12.4385 15.9952 12.1635L17.4618 10.706H13.6668V9.29435H17.4618L15.9952 7.83685C15.7202 7.56185 15.7202 7.11268 15.9952 6.83768Z"
                    fill={active === "logout" ? "#FACD66" : "rgb(80, 80, 80)"}
                  />
                </svg>
              </div>

              <p className="md:hidden text-white text-sm w-[100px] text-left ml-8">
                logout
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex justify-between bg-slate-900  fixed top-0 left-0 w-full px-4 py-2 min-w-fit z-[1001]">
        <div className="flex  items-center  justify-between md:justify-start ">
          <div
            className="cursor-pointer "
            onClick={() => {
              setActive("videos");
              setMenu(!showMenu);
            }}
          >
            <div
              className={`${
                showMenu ? "rotate-45 origin-left w-8" : "w-6"
              } md:hidden mr-4 bg-white h-[.1em]`}
            ></div>
            <div
              className={`${
                showMenu ? "-rotate-45 origin-center w-8" : "w-4"
              } md:hidden mr-4 bg-white  h-[.1em] mt-1`}
            ></div>
            <div
              className={`${
                !showMenu ? "w-2" : "w-0"
              } md:hidden mr-4 bg-white  h-[.1em] mt-1`}
            ></div>
          </div>
          <div
            className="flex cursor-pointer ml-1 "
            onClick={() => Navigate("/")}
          >
            <div>
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0601 0.587295L7.86476 2.13795C7.60683 2.19295 7.37555 2.3347 7.20947 2.53956C7.04339 2.74441 6.95254 3.00001 6.95207 3.26373V15.6468C6.42708 15.4645 5.87516 15.3717 5.3194 15.3724C2.80633 15.3724 0.768982 17.2177 0.768982 19.4941C0.768982 21.7704 2.80633 23.6158 5.31947 23.6158C7.04656 23.6158 8.77399 22.677 9.49197 21.0764C10.116 19.6854 9.86983 18.0132 9.86983 16.5213V6.62223L19.779 4.32072C19.7449 1.87246 17.4654 0.0689939 15.0601 0.587361L15.0601 0.587295Z"
                  fill="#FACD66"
                />
              </svg>
            </div>

            <div>
              <svg
                width="20"
                height="27"
                viewBox="0 0 20 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3081 6.38398C14.3079 6.33294 14.2962 6.2826 14.2739 6.23671C14.2515 6.19082 14.2191 6.15056 14.1791 6.11894C14.139 6.08732 14.0923 6.06514 14.0425 6.05407C13.9927 6.043 13.941 6.04332 13.8913 6.05501L4.24447 8.29555C4.17002 8.3127 4.10356 8.35455 4.05593 8.41428C4.0083 8.47402 3.9823 8.54813 3.98217 8.62453V19.4075C3.98217 20.8993 4.22827 22.5716 3.60431 23.9626C3.02412 25.256 1.78465 26.1169 0.419006 26.3998C0.749691 26.4676 1.08637 26.5018 1.42393 26.502C3.15103 26.502 4.87852 25.5632 5.5965 23.9626C6.22045 22.5716 5.97435 20.8993 5.97435 19.4075V8.62453C5.97449 8.54813 6.00049 8.47402 6.04812 8.41428C6.09575 8.35455 6.16221 8.3127 6.23666 8.29555L14.3081 6.4209V6.38398ZM1.06235 18.2727C0.84913 18.2878 0.637101 18.3165 0.427573 18.3588C0.554608 18.3847 0.679917 18.4147 0.802702 18.4499C0.831565 18.4584 0.861952 18.4604 0.891668 18.4557C0.921383 18.451 0.949686 18.4398 0.97453 18.4228C0.999375 18.4058 1.02014 18.3836 1.03533 18.3576C1.05052 18.3316 1.05974 18.3026 1.06235 18.2726V18.2727ZM19.218 19.4434C19.2172 16.9282 19.2172 14.413 19.218 11.8979V1.84266C19.2175 1.69091 19.183 1.54119 19.1172 1.40447C19.0513 1.26776 18.9557 1.14751 18.8373 1.05253C18.719 0.957554 18.5809 0.890258 18.4331 0.855574C18.2854 0.820889 18.1318 0.819694 17.9835 0.852075L16.8857 1.08868C16.9927 1.18298 17.0784 1.29901 17.137 1.42902C17.1956 1.55902 17.2259 1.70004 17.2258 1.84266V19.4434C17.2262 20.8536 17.3878 22.1648 16.5613 23.413C15.8792 24.4207 14.8345 25.1263 13.6449 25.3826C13.9813 25.4528 14.324 25.4883 14.6676 25.4884C16.1883 25.4884 17.7006 24.7011 18.5535 23.413C19.38 22.1648 19.2184 20.8537 19.218 19.4434ZM14.306 17.2591C14.0928 17.2742 13.8808 17.303 13.6712 17.3453C13.7983 17.3712 13.9236 17.4012 14.0464 17.4364C14.0752 17.4449 14.1056 17.4469 14.1353 17.4422C14.165 17.4375 14.1933 17.4263 14.2182 17.4093C14.243 17.3923 14.2638 17.3701 14.279 17.3441C14.2942 17.3181 14.3034 17.2891 14.306 17.2591Z"
                  fill="#9CBCBB"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-xl text-gray-400 p-2">
          <input
            type="text"
            placeholder="Search"
            className="block relative text-center p-1 pl-12 pr-4 md:w-72 w-48 rounded-full bg-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-gray-400 focus:border"
          />
          <div className="w-fit mt-6 absolute top-1 ml-4">
            <svg
              width="20"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 11.6667C9.27885 11.6667 11.6667 9.27885 11.6667 6.33333C11.6667 3.38781 9.27885 1 6.33333 1C3.38781 1 1 3.38781 1 6.33333C1 9.27885 3.38781 11.6667 6.33333 11.6667Z"
                stroke="gray"
                strokeOpacity="1"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
