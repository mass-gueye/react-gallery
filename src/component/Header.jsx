import React from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.config";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
  uploadGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },
};

export default function Header() {
  const [fileUpload, setFileUpload] = React.useState(null);
  const [imageList, setImageList] = React.useState("");

  const uploadImage = async () => {
    if (fileUpload === null) return;
    const fileRef = ref(storage, `images/${fileUpload.name}`);
    await uploadBytes(fileRef, fileUpload);
    alert("image uploaded");
    // setFileUpload()
  };
//   const imageListRef = ref(storage, "images/");
//   async function getImageUrl() {
//     const response = await listAll(imageListRef);
//     response.items.map(async (item) => {
//       const url = await getDownloadURL(item);
//       console.log(url);
//       return setImageList((prev) => [...prev, url]);
//     });
//   }
//   React.useEffect(() => {
//     getImageUrl();
//   }, []);

  return (
    <div className="header" style={styles.header}>
      <h1>Gallery</h1>
      <div className="upload-group" style={styles.uploadGroup}>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFileUpload(e.target.files[0])}
        />
        <button onClick={uploadImage} style={{ fontSize: "2rem" }}>
          +
        </button>
      </div>
    </div>
  );
}
