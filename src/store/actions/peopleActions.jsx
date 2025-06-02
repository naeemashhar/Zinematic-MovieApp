export { removepeople } from "../reducer/peopleSlice";
import axios from "../../utils/axios";
import { loadpeople } from "../reducer/peopleSlice";

export const asyncloadpeople = (id) => async (dispatch, getState) =>{
    try {

            const  detail = await axios.get(`/person/${id}`);
            const  externalid = await axios.get(`/person/${id}/external_ids`);
            const  combinedcredits = await axios.get(`/person/${id}/combined_credits`);
            const  tvcredits = await axios.get(`/person/${id}/tv_credits`);
            const  moviecredits = await axios.get(`/person/${id}/movie_credits`);
            
            

            let alldetail = {
                details: detail.data,
                externalid: externalid.data,
                combinedcredits: combinedcredits.data,
                tvcredits: tvcredits.data,
                moviecredits: moviecredits.data,

            };

            dispatch(loadpeople(alldetail));



    } catch (error) {
        console.log("Error :", error);
    }
}

