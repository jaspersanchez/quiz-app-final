import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import History from "../../components/History";

const Home = ({ user, history, loadHistory, logOut }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.user) {
      loadHistory(user.user);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
          <p className="text-4xl font-medium">Welcome, {user.user.name}!</p>
          <Link
            to="Quiz"
            className="btn text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Take Quiz
          </Link>
          <button
            className="btn text-white bg-red-500 hover:bg-red-600"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1
            className="text-center text-2xl font-medium mb-4"
            style={{ textTransform: "uppercase" }}
          >
            Your Quiz History
          </h1>
          <div
            className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 text-center"
            style={{ borderTop: "1px solid #ddd", paddingTop: "1rem" }}
          >
            {history.history[0] && history.history[0].length !== 0 ? (
              history.history[0].map((x, index) => (
                <History key={index} details={x} counter={index + 1} />
              ))
            ) : (
              <p className="text-xs font-light italic text-gray-400">
                No history available!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, history }) => ({
  user,
  history: history,
});

const mapDispatchToProps = (dispatch) => ({
  loadHistory: (value) =>
    dispatch({
      type: "LOAD_HISTORY_REQUEST",
      payload: value,
    }),
  logOut: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
