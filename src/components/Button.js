const Button = (props) => {
  const { name } = props;
  return (
    <button className=" bg-gray-300 px-2 py-1 mx-2 rounded-md">{name}</button>
  );
};

export default Button;
