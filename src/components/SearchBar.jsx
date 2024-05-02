import React from 'react';
import { Box, TextField, Button, IconButton, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EqualizerIcon from '@mui/icons-material/Equalizer'; // Using Equalizer icon for sorting

function SearchBar() {
    const [po, setPo] = React.useState('');

    const handleChange = (event) => {
        setPo(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            p: 1, 
            bgcolor: 'background.paper', 
            borderRadius: 1, 
            boxShadow: 1 // Add shadow for better visibility
        }}>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <TextField
                size="small"
                label="Coy id"
                variant="outlined"
                sx={{ flex: 1 }} // Flexible growth to use available space
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <EqualizerIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
                <InputLabel id="po-label">PO</InputLabel>
                <Select
                    labelId="po-label"
                    id="po-select"
                    value={po}
                    onChange={handleChange}
                    label="PO"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                </Select>
            </FormControl>
            <TextField
                size="small"
                label="Order no"
                variant="outlined"
                sx={{ flex: 1 }} // Flexible growth to use available space
            />
            <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
                Search
            </Button>
        </Box>
    );
}

export default SearchBar;
