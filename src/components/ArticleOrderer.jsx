import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function ({ order, setOrder }) {
  const sortOptions = [{ asc: "Ascending" }, { desc: "Descending" }];

  const orderBy = order || "desc";

  return (
    <FormControl>
      <InputLabel id="article-orderer-label">Order</InputLabel>
      <Select
        labelId="article-orderer-label"
        id="article-orderer"
        value={orderBy}
        label="Order"
        onChange={(e) => {
          setOrder(e.target.value);
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
