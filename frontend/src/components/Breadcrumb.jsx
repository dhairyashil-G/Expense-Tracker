import { useNavigate } from "react-router-dom";

export default function Breadcrumb() {
  const navigate = useNavigate();

  return (
    <nav className="">
      <ol className="inline-flex items-center space-x-1">
        <li className="inline-flex items-center">
          <a
            onClick={() => navigate("/")}
            className="inline-flex items-center text-base font-medium text-[#1F3F7B] hover:text-blue-700 cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-[#1F3F7B]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
      </ol>
    </nav>
  );
}