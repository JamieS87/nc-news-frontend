import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function () {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOptions = [{ asc: "Ascending" }, { desc: "Descending" }];

  const sortByDefault = "desc";

  return (
    <FormControl>
      <InputLabel id="article-orderer-label">Order</InputLabel>
      <Select
        labelId="article-orderer-label"
        id="article-orderer"
        value={searchParams.get("order") || sortByDefault}
        label="Order"
        onChange={(e) => {
          setSearchParams((searchParams) => {
            const newSearchParams = {
              ...Object.fromEntries(searchParams.entries()),
              order: e.target.value,
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
