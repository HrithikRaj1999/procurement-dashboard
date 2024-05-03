import React from 'react';
import { Box, TextField, Button, IconButton, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EqualizerIcon from '@mui/icons-material/Equalizer'; 

function TextInputWithIcon({ label, endIcon }) {
    return (
        <TextField
            size="small"
            label={label}
            variant="outlined"
            sx={{ flex: 1 }} 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {endIcon}
                    </InputAdornment>
                ),
            }}
        />
    );
}

function SelectInput({ label, value, onChange, options }) {
    return (
        <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                value={value}
                onChange={onChange}
                label={label}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

function SearchButton() {
    return (
        <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
            Search
        </Button>
    );
}

function SearchBar() {
    const [po, setPo] = React.useState('');

    const handleChange = (event) => {
        setPo(event.target.value);
    };

    const options = [
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
    ];

    return (
        <Box sx={{
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            p: 1, 
            bgcolor: 'background.paper', 
            borderRadius: 1, 
            boxShadow: 1 
        }}>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <TextInputWithIcon label="Coy id" endIcon={<EqualizerIcon />} />
            <SelectInput label="PO" value={po} onChange={handleChange} options={options} />
            <TextInputWithIcon label="Order no" />
            <SearchButton />
        </Box>
    );
}

export default SearchBar;
