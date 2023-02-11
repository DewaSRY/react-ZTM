import { createSelector } from "reselect";

const selectCatagoryReducer = (state) => state.catagories;

export const selectCatagories = createSelector(
  [selectCatagoryReducer],
  (catagoriesSlice) => catagoriesSlice.catagories
);

// export const selectCatagoriesArray = (state) => {
//   const categoriesArray = state.catagories.catagoriesArray.reduce(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   );
//   return categoriesArray;
// };
export const selectCatagoriesArray = createSelector(
  [selectCatagories],
  (catagories) =>
    catagories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selecIsLoading = createSelector(
  [selectCatagories],
  (catagoriesSlice) => catagoriesSlice.isLoading
);
