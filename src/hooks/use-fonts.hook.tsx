/**
 * Custom hook to retrieve fonts based on the selected language.
 * @module useFonts
 */

import fonts from "theme/fonts";

/**
 * Custom hook to retrieve fonts based on the selected language.
 * @returns {Object} The fonts object corresponding to the selected language.
 */
const useFonts = () => {
  // Retrieves the selected fonts based on the localization flag
  const selectedFonts = fonts.montserrat;

  return selectedFonts;
};

export default useFonts;
