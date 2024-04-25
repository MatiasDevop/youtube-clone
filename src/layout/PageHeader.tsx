import { Bell, Menu, Mic, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "../components/Button";

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <div></div>
      <form className="flex gap-4 flex-grow justify-center">
        <div></div>
        <Button size="icon">
          <Mic />
        </Button>
      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
