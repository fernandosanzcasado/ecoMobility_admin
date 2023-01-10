import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

import Box from "@mui/material/Box";
import { GridColumns, DataGrid, GridCellParams } from "@mui/x-data-grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n.js";

const columns = [
  { field: "email" },
  { field: "name" },
  { field: "surnames" },
  { field: "isSuperuser" },
  { field: "isBlocked" },
  { field: "dateJoined" },
];

const localizedTextsMap = {
  // Root
  noRowsLabel: "Sin filas",
  // noResultsOverlayLabel: 'No results found.',
  errorOverlayDefaultLabel: "Ha ocurrido un error.",

  // Density selector toolbar button text
  toolbarDensity: "Densidad",
  toolbarDensityLabel: "Densidad",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Comoda",

  // Columns selector toolbar button text
  toolbarColumns: "Columnas",
  toolbarColumnsLabel: "Seleccionar columnas",

  // Filters toolbar button text
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Ocultar filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) =>
    count > 1 ? `${count} filtros activos` : `${count} filtro activo`,

  // Export selector toolbar button text
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Descargar como CSV",

  // Columns panel text
  columnsPanelTextFieldLabel: "Columna de búsqueda",
  columnsPanelTextFieldPlaceholder: "Título de columna",
  columnsPanelDragIconLabel: "Reorder columna",
  columnsPanelShowAllButton: "Mostrar todo",
  columnsPanelHideAllButton: "Ocultar todo",

  // Filter panel text
  filterPanelAddFilter: "Agregar filtro",
  filterPanelDeleteIconLabel: "Borrar",
  // filterPanelLinkOperator: 'Logic operator',
  filterPanelOperators: "Operadores",

  // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: "Y",
  filterPanelOperatorOr: "O",
  filterPanelColumns: "Columnas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor de filtro",

  // Filter operators text
  filterOperatorContains: "contiene",
  filterOperatorEquals: "es igual",
  filterOperatorStartsWith: "comienza con",
  filterOperatorEndsWith: "termina con",
  filterOperatorIs: "es",
  filterOperatorNot: "no es",
  filterOperatorAfter: "es posterior",
  filterOperatorOnOrAfter: "es en o posterior",
  filterOperatorBefore: "es anterior",
  filterOperatorOnOrBefore: "es en o anterior",
  filterOperatorIsEmpty: "está vacío",
  filterOperatorIsNotEmpty: "no esta vacío",

  // Column menu text
  columnMenuLabel: "Menú",
  columnMenuShowColumns: "Mostrar columnas",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocultar",
  columnMenuUnsort: "Desordenar",
  columnMenuSortAsc: "Ordenar ASC",
  columnMenuSortDesc: "Ordenar DESC",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count > 1 ? `${count} filtros activos` : `${count} filtro activo`,
  columnHeaderFiltersLabel: "Mostrar filtros",
  columnHeaderSortIconLabel: "Ordenar",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count > 1
      ? `${count.toLocaleString()} filas seleccionadas`
      : `${count.toLocaleString()} fila seleccionada`,

  // Total row amount footer text
  footerTotalRows: "Filas Totales:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

  // Actions cell more text
  actionsCellMore: "más",
};

const errorControl = (errorId) => {
  switch (errorId) {
    case 2:
      alert("Empty email field");
      break;
    case 3:
      alert("Error in blocking");
      break;
    default:
      break;
  }
};

const checkTextInputNotEmpty = (input) => {
  if (input.id === "" || input.id === undefined) {
    console.log(input.id);
    console.log("Required fields are empty");
    errorControl(2);
    return false;
  } else {
    console.log("Fields are not empty");
    return true;
  }
};

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function Users() {
  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [input, setInput] = React.useState({});
  const validation = useValidation();

  const handleChange = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    async function getUsuarios() {
      try {
        const res = await axios.get(
          `http:///${process.env.REACT_APP_BASE_URL}/api/v2/users/admin/getAllUsers/`,
          { withCredentials: true }
        );

        setRows(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsuarios();
  }, []);

  React.useEffect(() => {
    console.log(rows);
  }, [rows]);

  function generateRandom() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const handleClickUpdateUser = () => navigate("/ecoMobility/users/udateUser");

  return (
    <div>
      <h1 className="users-title">{t("Users.Title")}</h1>
      <div
        className="container-users"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          className="pt-2 pb-2 w-100"
          sx={{
            height: "500px",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => generateRandom()}
            localeText={localizedTextsMap}
            pageSize={[50]}
          />
        </Box>
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="id"
          placeholder={t("Users.Id")}
          value={input.id || ""}
          onChange={handleChange}
        />
      </div>
      <div className="electricStations-button">
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={() => {
            if (validation.checkTextInputNotEmpty(input)) {
              console.log("Update user");
              navigate(`/ecoMobility/users/updateUser/${input.id}`);
            }
          }}
        >
          {t("Users.Update")}
        </Button>
      </div>
    </div>
  );
}
