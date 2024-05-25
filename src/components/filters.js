import React, { useState } from 'react';
import { Select, MenuItem, Typography, List, ListItem, ListItemText, FormControl, InputLabel } from '@mui/material';

const Filters = ({ categories, items }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory ? items.filter(item => item.category === selectedCategory) : items;

  return (
    <div>
      <Typography variant="h4" gutterBottom>Filters</Typography>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          fullWidth
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          {categories.map(category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <Typography variant="h5" gutterBottom>Items</Typography>
        <List>
          {filteredItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Filters;
