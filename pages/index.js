import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/johnscomponents/NavBar";
//home page
export default function Home() {
  return (
    <div>
      <NavBar />
      Home
      <Link href="/login">Login</Link>
      <Link href="/saved">Saved</Link>
    </div>
  );
}
