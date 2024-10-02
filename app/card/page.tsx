import Image from "next/image";

export default function Card(props) {
  return (
    <>
    <h1>Name={props.Name}</h1>
    <h1>Age={props.Age}</h1>
    <h1>Rollno={props.Rollno}</h1>
    <h1>Day={props.Day}</h1>
    </>
  )}