import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import ActionButtons from "./ActionButtons";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <DropdownMenu />
      </div>
      <div className="navbar-center">
        <Logo />
      </div>
      <div className="navbar-end">
        <ActionButtons />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
