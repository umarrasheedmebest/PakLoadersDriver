import {createSlice} from '@reduxjs/toolkit';
import update from 'immutability-helper';
const bids = createSlice({
  name: 'bids',
  initialState: {
    //Create bids
    getAllBidsRequest: false,
    getAllBidsResponse: [],
    bidCreateRequest:false,
    bidCreateResponse:[]   
  },

  reducers: {
    getAllBidsRequest: (state, action) =>
      update(state, {
        getAllBidsRequest: {$set: true},
      }),
    getAllBidsResponse: (state, action) =>
      update(state, {
        getAllBidsResponse: {$set: action.payload},
        getAllBidsRequest: {$set: false},
      }),
      bidCreateRequest: (state, action) =>
      update(state, {
        
        bidCreateRequest: {$set: true},
      }),
      bidCreateResponse: (state, action) =>
      update(state, {
        bidCreateResponse: {$set: action.payload},
        bidCreateRequest: {$set: false},
      }),
  
  },
});
export const {
  getAllBidsRequest,
  getAllBidsResponse,
  bidCreateRequest,
  bidCreateResponse
} = bids.actions;
export const bidsReducer = bids.reducer;
