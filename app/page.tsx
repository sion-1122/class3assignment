import Image from "next/image";
import { Card } from "@/cards/cards";

const Home =()=> {
  return (
  <>
    <Card name={'sion'} rollno={63} day={'monday'}/><br/>
    <Card name={'megumi'} rollno={65} day={'monday'}/><br/>
    <Card name={'sakuna'} rollno={67} day={'monday'}/><br/>
  </>
  );
}

export default Home