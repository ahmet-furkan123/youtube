import Error from "./Error";
import Spinner from "./Spinner";


const AsyncContent = ({ isLoading, error, fallback = <Spinner />, children }) => {
  if (isLoading) return fallback;

  if (error) return <Error message={error} />;

  return children;
};

export default AsyncContent;