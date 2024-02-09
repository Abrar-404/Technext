const UsersCard = ({ usersInfo }) => {
  const { firstName } = usersInfo || {};
  return (
    <div>
      <h1 className="text-white mt-32">{firstName}</h1>
    </div>
  );
};

export default UsersCard;
