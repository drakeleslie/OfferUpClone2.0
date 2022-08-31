import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/johnscomponents/NavBar";
import Container from "../components/paulscomponents/Container";
//home page
export default function Home() {
  return (
    //container will be the top level component to standardize sizing across all pages 
    <div>
        {/* Nav bar will standard on all pages so it is the first child of contianer */}
        <NavBar />
        {/* everything else for this page will follow here */}

    </div>
  );
}
