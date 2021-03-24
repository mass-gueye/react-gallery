import './image.styles.css';

const Image = ({ data }) => (
    <div>
    {data.map(data => (
        <img key={data.id} src={data.urls.regular} alt={data.alt_description}/>
    ))}
    </div>
)

export default Image;