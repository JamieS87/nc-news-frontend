import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function ({ sort_by, setSortBy }) {

  const sortOptions = [
    { created_at: "Date" },
    { comment_count: "Comments" },
    { votes: "Votes" },
  ];

  const sortBy = sort_by || "created_at";

  return (
    <FormControl>
      <InputLabel id="article-sorter-label">Sort By</InputLabel>
      <Select
        labelId="article-sorter-label"
        id="article-sorter"
        value={sortBy}
        label="Sort By"
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        {sortOptions.map((option) => {
          const [menuItemValue] = Object.keys(option);
          const [menuItemText] = Object.values(option);
          return (
            <MenuItem key={menuItemValue} value={menuItemValue}>
              {menuItemText}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
