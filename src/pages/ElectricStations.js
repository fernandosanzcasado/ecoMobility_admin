import * as React from "react";

import Box from "@mui/material/Box";
import { GridColumns, DataGrid, GridCellParams } from "@mui/x-data-grid";
import axios from "axios";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n.js";

const columns = [
  { field: "id" },
  { field: "latitud" },
  { field: "longitud" },
  { field: "codiProv" },
  { field: "direccion" },
  { field: "municipio" },
  { field: "provincia" },
  { field: "nPlazas" },
  { field: "potencia" },
  { field: "promotor" },
  { field: "tipoConexion" },
  { field: "tipoCorriente" },
  { field: "tipoVehiculo" },
  { field: "tipoVelocidad" },
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
      alert("Empty id field");
      break;
    case 3:
      alert("Error in deleting");
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

export default function ElectricStations() {
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

  const handleClickAddStation = () =>
    navigate("/ecoMobility/stations/electricStations/addElectricStation");

  async function deleteStation(input) {
    try {
      console.log(input.id);
      const result = await axios.delete(
        `http://localhost:3000/api/v2/estaciones/info/${input.id}`,
        { withCredentials: true }
      );
      console.log(result);
      return true;
    } catch (error) {
      console.log("Error" + error);
      errorControl(3);
      return false;
    }
  }

  React.useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          //`http://${process.env.REACT_APP_BASE_URL}/api/v2/estaciones`
          `http://localhost:3000/api/v2/estaciones`
        );
        setRows(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  React.useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    <div>
      <div className="addStation-button">
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={handleClickAddStation}
        >
          {t("Stations.Add")}
        </Button>
      </div>
      <div
        className="container"
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
          placeholder={t("Stations.Id")}
          value={input.id || ""}
          onChange={handleChange}
        />
      </div>
      <div className="electricStations-button">
        <ButtonGroup aria-label="First group">
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={() => {
              if (validation.checkTextInputNotEmpty(input)) {
                console.log("Update station");
                navigate(
                  `/ecoMobility/stations/electricStations/updateStation/${input.id}`
                );
              }
            }}
          >
            {t("Stations.Update")}
          </Button>
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={() => {
              if (validation.checkTextInputNotEmpty(input)) {
                console.log("Delete station");
                (async () => {
                  if (await deleteStation(input))
                    navigate("/ecoMobility/stations");
                })();
              }
            }}
          >
            {t("Stations.Delete")}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
