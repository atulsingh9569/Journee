import React from 'react'
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const Subtitle = ({subtitle}) => {
    return (
        <Button className='primary__btn'>
            <Link to="#">{subtitle}</Link>
        </Button>
    )
}
export default Subtitle;