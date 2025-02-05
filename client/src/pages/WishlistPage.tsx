import WishList from "../components/WishList";
import { useTheme } from "../contexts/ColorsContext";

const WishlistPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen p-14 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <WishList />
      </div>
    </div>
  );
};

export default WishlistPage;
