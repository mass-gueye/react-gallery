import "./image.styles.css";

const Image = ({ data }) => (
  <div>
    {data.map((data) => (
      <img key={data} src={data} alt={data} />
    ))}
  </div>
);

export default Image;
