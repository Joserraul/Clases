import { createContext, useState } from "react"; // sirve para crear un contexto
import propTypes from "prop-types"; // sirve para validar los tipos de datos

const ThemeContext = createContext(); // sirve para crear un contexto

function ThemeProvider({ children }) { // sirve para crear un proveedor de contexto
  const [theme, setTheme] = useState("light"); // sirve para crear un estado

  const toggleTheme = () => { // sirve para cambiar el estado
    setTheme(theme === "light" ? "dark" : "light"); // sirve para cambiar el estado
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> // sirve para pasar el estado y la función a los componentes hijos
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = { // sirve para validar los tipos de datos
  children: propTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };   // sirve para exportar el proveedor y el contexto
