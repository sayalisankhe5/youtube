import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Football",
    "Cooking",
    "Dance",
    "Music",
    "Art",
    "Science",
    "Coding",
  ];
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
