export { removemovie } from "../reducer/MovieSlice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducer/MovieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) =>{
    try {

            const  detail = await axios.get(`/movie/${id}`);
            const  externalid = await axios.get(`/movie/${id}/external_ids`);
            const  recommendation = await axios.get(`/movie/${id}/recommendations`);
            const  similar = await axios.get(`/movie/${id}/similar`);
            const  videos = await axios.get(`/movie/${id}/videos`);
            const  watchproviders = await axios.get(`/movie/${id}/watch/providers`);
            const  translations = await axios.get(`/movie/${id}/translations`);

            let alldetail = {
                details: detail.data,
                externalid: externalid.data,
                recommendation: recommendation.data.results,
                similar: similar.data.results,
                videos: videos.data.results.find(m => m.type === "Trailer"),
                watchproviders: watchproviders.data.results.IN,
                translations: translations.data.translations.map((t) =>t.name),
            };

            dispatch(loadmovie(alldetail));



    } catch (error) {
        console.log("Error :", error);
    }
}

