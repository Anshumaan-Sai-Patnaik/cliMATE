import Button from '@mui/material/Button';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

export default function SearchButton() {
    return(
        <Button className='searchButton' variant="outlined" endIcon={<LocationSearchingIcon />} type='submit'
            sx={{
                color: 'rgb(250, 253, 255)',
                borderColor: 'rgba(161, 213, 255, 0.65)',
                marginLeft: '1rem',
                height: '3.3rem',
                width: '8rem',
            }}
        >
            Search
        </Button>
    )
}