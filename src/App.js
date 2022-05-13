import "./App.css";
import Container from "./component/container/container.component";
import React, { Component } from "react";
import Footer from "./component/footer/footer.component";
import Header from "./component/Header";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.config";

export default function App() {
  const imageListRef = ref(storage, "images/");
  const [imageList, setImageList] = React.useState([]);

  async function getImageUrl() {
    const response = await listAll(imageListRef);
    response.items.map(async (item) => {
      const url = await getDownloadURL(item);
      console.log(url);
      return setImageList((prev) => [...prev, url]);
    });
  }
  React.useEffect(() => {
    getImageUrl();
  }, []);
  return (
    <div>
      <Header />
      <Container data={imageList} />
      <Footer />
    </div>
  );
}
