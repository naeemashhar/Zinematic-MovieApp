export { removetv } from "../reducer/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from "../reducer/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) =>{
    try {

            const  detail = await axios.get(`/tv/${id}`);
            const  externalid = await axios.get(`/tv/${id}/external_ids`);
            const  recommendation = await axios.get(`/tv/${id}/recommendations`);
            const  similar = await axios.get(`/tv/${id}/similar`);
            const  videos = await axios.get(`/tv/${id}/videos`);
            const  watchproviders = await axios.get(`/tv/${id}/watch/providers`);
            const  translations = await axios.get(`/tv/${id}/translations`);

            let alldetail = {
                details: detail.data,
                externalid: externalid.data,
                recommendation: recommendation.data.results,
                similar: similar.data.results,
                videos: videos.data.results.find(m => m.type === "Trailer"),
                watchproviders: watchproviders.data.results.IN,
                translations: translations.data.translations.map((t) =>t.name),
            };

            dispatch(loadtv(alldetail));



    } catch (error) {
        console.log("Error :", error);
    }
}

