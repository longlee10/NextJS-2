import NotFound from "./components/NotFound";

const NotFoundPage = () => {
  return (
    <NotFound
      message="The requested page does not exist."
      buttonMessage="Home"
      href="/"
    />
  );
};

export default NotFoundPage;
