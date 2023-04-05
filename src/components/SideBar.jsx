import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SearchBar = () => (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column'},
      }}
      <categories.map((category)) => {
        <button className=''>

        </button>
      }
  )


export default SearchBar;