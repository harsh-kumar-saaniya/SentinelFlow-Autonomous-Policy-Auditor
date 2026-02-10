import Image from "next/image";
import ContactPage from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <ContactPage />
    </div>
  );
}
