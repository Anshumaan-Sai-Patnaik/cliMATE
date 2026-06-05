import './SearchField.css'

import TextField from '@mui/material/TextField';

export default function SearchField({formInput, handler}) {
    return (
        <TextField
            sx={{
                '& .MuiInputBase-input': {
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '1rem'
                },
                '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.50)',
                },
                '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                    color: 'rgba(255, 255, 255, 0.35)',
                    fontSize: '0.9rem'
                }
            }}
            className='searchField' id="filled-basic" label="Required*" variant="filled" value={formInput} onChange={handler}
        />
    )
}