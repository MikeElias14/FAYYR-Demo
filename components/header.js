
import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {

  const displayDesktop = () => {
    return <Toolbar>Hi From Desktop Header</Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}