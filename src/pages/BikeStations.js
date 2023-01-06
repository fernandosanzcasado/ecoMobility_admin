import * as React from "react";

import Box from "@mui/material/Box";
import { GridColumns, DataGrid, GridCellParams } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id" },
  { field: "latitud" },
  { field: "longitud" },
  { field: "Num Bikes Available" },
  { field: "Num docks Available" },
  { field: "street" },
  { field: "slots" },
  { field: "postal code" },
  { field: "capacity" },
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
  // filterOperatorIsAnyOf: 'is any of',

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

export default function ElectricStations() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${process.env.REACT_APP_BASE_URL}/api/v2/info`
        );
        console.log(res.data);
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
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        className="pt-3 pb-3 w-100"
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
  );
}
