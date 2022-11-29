// 데이터 관련 요청 파일들은 전부 여기 둔다.

import axios from 'axios';

const apiUrl = "http://35.76.53.28:8080/";

const instance = axios.create({
    baseURL: apiUrl,
});

export const getProductData = async () => {
    try{
        const response = await instance.get("mall");
        return response.data;
    } catch(error){
        console.log(error);
    }
};

