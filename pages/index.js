import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/johnscomponents/Header";
//home page
export default function Home() {
  return <div>
    Home 
    <Link href="/login">Login</Link>
    <Header />
  </div>;
}
