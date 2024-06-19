export const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 min-h-screen">
      <div className="flex flex-col space-y-4">
        <div className="flex-1">
          <svg
            className="w-full h-24 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex-1 text-justify">
          <p className="text-lg"> Brand Identity ? </p>
          <p className="text-lg"> Social media Design ? </p>
          <p className="text-lg"> Website Building ? </p>
        </div>
        <div className="flex-1 justify-start">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            WE HAVE IT ALL!
          </button>
        </div>
      </div>

      <div className="flex items-end">
        <div className="w-full">
          <svg
            className="w-full h-24 bg-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <div className="space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Button 1
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};
