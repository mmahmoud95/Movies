// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // import axios from "axios";

// // //create the action createAsyncThunk(type , action)
// // export const moviesAction = createAsyncThunk("movies/getAll", async () => {
// //     const res = await axios.get(
// //         "https://api.themoviedb.org/3/movie/popular?api_key=5ce16522b7c2658b1bdfda1ff76ebfb3"
// //     );

// //     console.log(res.data.results);
// //     return res.data.results;
// // });

// // const moviesSlice = createSlice({
// //     name: "movies",
// //     initialState: { movies: [] },
// //     extraReducers: (builder) => {
// //         //   handle all the action cases
// //         builder.addCase(moviesAction.fulfilled, (state, action) => {
// //             state.movies = action.payload;
// //         });
// //         // builder.addCase(moviesAction.pending, () => {});
// //         // builder.addCase(moviesAction.rejected, (state, action) => {
// //         //     console.log("gfdg");
// //         // });
// //     },
// // });

// // //export the slice reducer
// // export default moviesSlice.reducer;
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import axios from "axios";

// //create the action createAsyncThunk(type , action)
// export const moviesAction = createAsyncThunk(
//     "movies/getAll",
//     async (page) => {
//         const res = await axios.get(
//             "https://api.themoviedb.org/3/movie/popular",
//             {
//                 params: {
//                     api_key: "5ce16522b7c2658b1bdfda1ff76ebfb3",
//                     page: page,
//                 },
//             }
//         );
//         console.log(res);
//         return res.data.results;
//     }
// );

// const moviesSlice = createSlice({
//     name: "movies",
//     initialState: { movies: [] },
//     extraReducers: (builder) => {
//         //   handle all the action cases
//         builder.addCase(moviesAction.fulfilled, (state, action) => {
//             console.log(action.payload);
//             state.movies = action.payload;
//         });
//         //    builder.addCase(productsAction.pending,()=>{

//         //    })
//         //    builder.addCase(productsAction.rejected,(state,action)=>{
//         //     state.error=
//         //    })
//     },
// });

// //export the slice reducer
// export default moviesSlice.reducer;
