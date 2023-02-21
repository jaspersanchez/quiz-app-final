import React from "react";

const History = ({ details, counter }) => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <div>
            <h1 className="text-lg font-bold mb-6">ATTEMPT #{counter}</h1>
            <p className="text-md font-medium text-gray-600">
              Score {details.score}
            </p>
            <p className="text-xs font-semibold text-gray-600 mt-6">
              {new Date(details.createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
