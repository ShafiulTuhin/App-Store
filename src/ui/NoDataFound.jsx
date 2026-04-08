const NoDataFound = ({ message = "No data found!" }) => {
  return (
    <div className="flex items-center justify-center min-h-[300px] px-4">
      <div className="text-center max-w-md w-full bg-white shadow-md rounded-2xl p-6 sm:p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 9.172a4 4 0 015.656 5.656M15 15l4 4m-6-6a4 4 0 11-5.656-5.656"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
          {message}
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Try adding some data or refresh the page.
        </p>

        {/* Button (optional) */}
        <button
          onClick={() => window.location.reload()}
          className="mt-5 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg text-sm sm:text-base hover:opacity-90 transition"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NoDataFound;
