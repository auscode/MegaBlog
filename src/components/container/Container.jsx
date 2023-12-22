import ClipLoader from "react-spinners/ClipLoader";

function Container({ children, loading }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color="#4A90E2"
            loading={loading}
            size={70}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default Container;
