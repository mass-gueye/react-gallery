import './component.styles.css';
import Image from '../image/image.component';

const Container = ({ data }) => (

    <div className="container">
        <Image data={data}/>
    </div>

)


export default Container;