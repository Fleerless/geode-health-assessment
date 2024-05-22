import { AxiosError, AxiosResponse } from "axios";
import { Request, Response } from "express";
import { cleanComplaints, sortByDate } from "helpers/cleanedResponses";

const express = require('express');
const axios = require("axios");

const app = express();

const PORT = process.env.PORT ?? 5050;

const _baseURL = "https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/"
const _trendsURL = `${_baseURL}trends/`

app.get("/complaints/:searchTerms", (req: Request, res: Response) => {
    const searchTerms = req?.params?.searchTerms;
    const searchTermsURI = encodeURI(req?.params?.searchTerms);
    const _searchURL = `${_baseURL}?search_term=${searchTermsURI}`;

    axios
        .get(!!searchTerms ? _searchURL : _baseURL)
        .then((response: AxiosResponse) => {
            const hits = cleanComplaints(response?.data?.hits?.hits);
            const dateSortedComplaints = sortByDate(hits);
            res.send(dateSortedComplaints || []);
        })
        .catch((error: AxiosError) => {
            console.log("Error:", error.message);
            res.send(Promise.reject(error));
        });
});

app.get("/trends", (req: Request, res: Response) => {
    axios.get(_trendsURL)
    .then((response: AxiosResponse) => {
        res.send(response.data || []);
    })
    .catch(
        (error: AxiosError) => { 
            console.log('Error:', error.message)
            res.send(Promise.reject(error));
        }
    )
});

app.get("/complaint/:id", (req: Request, res: Response) => {
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`);})