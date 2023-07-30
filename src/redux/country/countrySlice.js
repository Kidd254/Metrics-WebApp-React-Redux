import { createSlice, } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataFromApi = createAsyncThunk(
    'countries/fetch countries',
    async(thunkAPI)=>{
        try{
            const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
    }
)

const initialState ={
    countries: [],
    isLoading: false,
    error: null,
}

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getDataFromApi.pending, (state)=>{
            state.isLoading= true;
        })
        .addCase(getDataFromApi.fulfilled, (state, action)=>{
            state.isLoading= false;
            state.countries= action.payload.map((country)=> ({
                name: country.name, 
                population: country.population,
                week:country.startOfWeek, 
                capital:country.capital, 
                flag: country.flag, 
                flagImage: country.flags.png,
                continent: country.continents[0],
                region: country.region
            }))
        })
        .addCase(getDataFromApi.rejected, (state, action)=>{
            state.isLoading= false;
            state.error= action.payload;
        })
    }
})
export default countrySlice.reducer;
