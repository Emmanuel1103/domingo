import axios from "axios";

const EXCEL_API_URL = "link";

export async function getExcelTasks() {
  try {
    const response = await axios.get(EXCEL_API_URL);
    console.log("📦 Datos recibidos del Excel:", response.data);
    return response.data.value || response.data;
  } catch (error) {
    console.error("Error al obtener datos del Excel:", error);
    return [];
  }
}
