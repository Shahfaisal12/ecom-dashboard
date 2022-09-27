import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const linkstyle = { textDecoration: "none", color: "#000000" };

// function createData(order_id, customer_name, order, delivery_date, delivery_price, delivery_status, payment_type, payment_status) {
//   return {
//     order_id,
//     customer,
//     order,
//     delivery_date,
//     delivery_price,
//     delivery_status,
//     payment_type,
//     payment_status
//   };
// }

const userData = [
  {
    order_id: "AKN15208",
    customer_name: "Aqib Ali",
    order_product: "Tshirt",
    delivery_date: "7-09-2022",
    delivery_price: "$345",
    delivery_status: "Restitute",
    payment_type: "Credit Card",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15208",
    customer_name: "Muhammad Umair",
    order_product: "Shoes",
    delivery_date: "5-09-2022",
    delivery_price: "$99",
    delivery_status: "Complete",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15209",
    customer_name: "Aslam",
    order_product: "Head Phone",
    delivery_date: "4-09-2022",
    delivery_price: "$89",
    delivery_status: "Canceled",
    payment_type: "Paypal",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15301",
    customer_name: "Nasir Ali",
    order_product: "Watch",
    delivery_date: "6-09-2022",
    delivery_price: "$78",
    delivery_status: "Continue",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15302",
    customer_name: "Usman Khan",
    order_product: "Laptop",
    delivery_date: "9-09-2022",
    delivery_price: "$565",
    delivery_status: "Complete",
    payment_type: "Credit Card",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15304",
    customer_name: "Hussan Ali",
    order_product: "IPhone",
    delivery_date: "3-09-2022",
    delivery_price: "$2345",
    delivery_status: "Restitute",
    payment_type: "Payppal",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15305",
    customer_name: "Naseem Sha",
    order_product: "Kits",
    delivery_date: "5-09-2022",
    delivery_price: "$78",
    delivery_status: "Canceled",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15306",
    customer_name: "Hussan Ali",
    order_product: "IPhone",
    delivery_date: "3-09-2022",
    delivery_price: "$2345",
    delivery_status: "Restitute",
    payment_type: "Payppal",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15307",
    customer_name: "Aqib Ali",
    order_product: "Tshirt",
    delivery_date: "7-09-2022",
    delivery_price: "$345",
    delivery_status: "Restitute",
    payment_type: "Credit Card",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15308",
    customer_name: "Nasir Ali",
    order_product: "Watch",
    delivery_date: "6-09-2022",
    delivery_price: "$78",
    delivery_status: "Continue",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15309",
    customer_name: "Naseem Sha",
    order_product: "Kits",
    delivery_date: "5-09-2022",
    delivery_price: "$78",
    delivery_status: "Canceled",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15310",
    customer_name: "Muhammad Umair",
    order_product: "Shoes",
    delivery_date: "5-09-2022",
    delivery_price: "$99",
    delivery_status: "Complete",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15311",
    customer_name: "Aqib Ali",
    order_product: "Tshirt",
    delivery_date: "7-09-2022",
    delivery_price: "$345",
    delivery_status: "Restitute",
    payment_type: "Credit Card",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15312",
    customer_name: "Aslam",
    order_product: "Head Phone",
    delivery_date: "4-09-2022",
    delivery_price: "$89",
    delivery_status: "Canceled",
    payment_type: "Paypal",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15313",
    customer_name: "Hussan Ali",
    order_product: "IPhone",
    delivery_date: "3-09-2022",
    delivery_price: "$2345",
    delivery_status: "Restitute",
    payment_type: "Payppal",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15314",
    customer_name: "Muhammad Umair",
    order_product: "Shoes",
    delivery_date: "5-09-2022",
    delivery_price: "$99",
    delivery_status: "Complete",
    payment_type: "Bank Transfer",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15315",
    customer_name: "Aslam",
    order_product: "Head Phone",
    delivery_date: "4-09-2022",
    delivery_price: "$89",
    delivery_status: "Canceled",
    payment_type: "Paypal",
    edit_icon: <EditIcon />,
  },
  {
    order_id: "AKN15316",
    customer_name: "Aqib Ali",
    order_product: "Tshirt",
    delivery_date: "7-09-2022",
    delivery_price: "$345",
    delivery_status: "Restitute",
    payment_type: "Credit Card",
    edit_icon: <EditIcon />,
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "order_id",
    numeric: false,
    disablePadding: true,
    label: "Order ID",
  },
  {
    id: "customer_name",
    numeric: true,
    disablePadding: false,
    label: "customer_name",
  },
  {
    id: "order",
    numeric: true,
    disablePadding: false,
    label: "Order",
  },
  {
    id: "delivery_date",
    numeric: true,
    disablePadding: false,
    label: "Delivery Date",
  },
  {
    id: "delivery_price",
    numeric: true,
    disablePadding: false,
    label: "Delivery Pricing",
  },
  {
    id: "delivery_status",
    numeric: true,
    disablePadding: false,
    label: "Delivery Status",
  },
  {
    id: "payment_type",
    numeric: true,
    disablePadding: false,
    label: "Payment type",
  },
  {
    id: "payment_type",
    numeric: true,
    disablePadding: false,
    label: "Payment Status",
  },
  {
    id: "edit_icon",
    numeric: true,
    disablePadding: false,
    label: "Edit Icon",
  },
];

function OrdersTable(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: "bold" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrdersTable.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const OrderTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

OrderTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const Orders = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("customer_name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = userData.map((n) => n.order_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, order_id) => {
    const selectedIndex = selected.indexOf(order_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, order_id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (order_id) => selected.indexOf(order_id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userData.length) : 0;

  return (
 <>
 <div style={{ width: "100%", background: "#F1F1F1" }}>
 <Typography
   variant="h5"
   align="center"
   sx={{ fontWeight: "bold", mb: 2, py: 1 }}
 >
   Orders
 </Typography>
</div>
 <Box sx={{ width: "100%" }}>
   <Paper sx={{ width: "100%", my: 5 }}>
     <OrderTableToolbar numSelected={selected.length} />
     <TableContainer>
       <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
         <OrdersTable
           numSelected={selected.length}
           order={order}
           orderBy={orderBy}
           onSelectAllClick={handleSelectAllClick}
           onRequestSort={handleRequestSort}
           rowCount={userData.length}
         />
         <TableBody>
           {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
           {stableSort(userData, getComparator(order, orderBy))
             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
             .map((row, index) => {
               const isItemSelected = isSelected(row.order_id);
               const labelId = `enhanced-table-checkbox-${index}`;

               return (
                 <TableRow
                   hover
                   onClick={(event) => handleClick(event, row.order_id)}
                   role="checkbox"
                   aria-checked={isItemSelected}
                   tabIndex={-1}
                   key={row.order_id}
                   selected={isItemSelected}
                 >
                   <TableCell padding="checkbox">
                     <Checkbox
                       color="primary"
                       checked={isItemSelected}
                       inputProps={{
                         "aria-labelledby": labelId,
                       }}
                     />
                   </TableCell>
                   <TableCell
                     component="th"
                     id={labelId}
                     scope="row"
                     padding="none"
                   >
                     <Link to="/order/detail" style={linkstyle}>
                       {" "}
                       {row.order_id}
                     </Link>
                   </TableCell>
                   <TableCell align="right">{row.customer_name}</TableCell>
                   <TableCell align="right">{row.order_product}</TableCell>
                   <TableCell align="right">{row.delivery_date}</TableCell>
                   <TableCell align="right">{row.delivery_price}</TableCell>
                   <TableCell align="right">{row.delivery_status}</TableCell>
                   <TableCell align="right">{row.payment_type}</TableCell>
                   <TableCell align="right">{row.payment_type}</TableCell>
                   <TableCell align="right">{row.edit_icon}</TableCell>
                 </TableRow>
               );
             })}
           {emptyRows > 0 && (
             <TableRow>
               <TableCell colSpan={6} />
             </TableRow>
           )}
         </TableBody>
       </Table>
     </TableContainer>
     <TablePagination
       rowsPerPageOptions={[5, 10, 25]}
       component="div"
       count={userData.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
   </Paper>
 </Box>
 </>
  );
};

export default Orders;
