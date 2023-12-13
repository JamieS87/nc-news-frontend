import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function () {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOptions = [
    { created_at: "Date" },
    { comment_count: "Comments" },
    { votes: "Votes" },
  ];

  const sortByDefault = "created_at";

  return (
    <FormControl>
      <InputLabel id="article-sorter-label">Sort By</InputLabel>
      <Select
        labelId="article-sorter-label"
        id="article-sorter"
        value={searchParams.get("sort_by") || sortByDefault}
        label="Sort By"
        onChange={(e) => {
          setSearchParams((searchParams) => {
            const newSearchParams = {
              ...Object.fromEntries(searchParams.entries()),
              sort_by: e.target.value,
            };
            return newSearchParams;
          });
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
