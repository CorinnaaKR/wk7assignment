//import the Link component
import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Form"}>Submission</Link>
        <Link to={"/Entries"}>Inception Inspection</Link>
      </nav>
    </>
  );
}
