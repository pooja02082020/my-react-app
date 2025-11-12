import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../data/data.js"

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: products,
  },
  reducers: {},
})

export default productSlice.reducer