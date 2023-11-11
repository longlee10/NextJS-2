import NotFound from "@/app/components/NotFound";

const NotFoundUserPage = () => {
  return (
    <NotFound
      message="User does not exist."
      buttonMessage="Back To User Page"
      href="/users"
    />
  );
};

export default NotFoundUserPage;
