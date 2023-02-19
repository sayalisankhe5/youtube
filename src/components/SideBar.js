import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 p-2">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <h1 className="pt-2 font-bold">Subscrptions</h1>
      <ul>
        <li>Music</li>
        <li>gaming</li>
      </ul>
      <h1 className="pt-2 font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>gaming</li>
      </ul>
    </div>
  );
};

export default SideBar;
