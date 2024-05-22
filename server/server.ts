import { AxiosError, AxiosResponse } from "axios";
import { Request, Response } from "express";
import { cleanedComplaints } from "helpers/cleanedResponses";

const express = require('express');
const axios = require("axios");

const app = express();

const PORT = process.env.PORT ?? 5050;

const _baseURL = "https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/"
const _trendsURL = `${_baseURL}trends/`

app.get("/complaints", (req: Request, res: Response) => {
    const searchTerms = encodeURI(req?.body?.searchTerms);
    const _searchURL = `${_baseURL}?searchTerm=${searchTerms}`;

    axios
        .get(searchTerms ? _searchURL : _baseURL)
        .then((response: AxiosResponse) => {
        res.send(cleanedComplaints(response?.data?.hits?.hits) || []);
        })
        .catch((error: AxiosError) => {
        console.log("Error:", error.message);
        res.send(Promise.reject(error));
        });
});

app.get("/trends", (req: Request, res: Response) => {
    axios.get(_trendsURL)
    .then((response: AxiosResponse) => {
        console.log(JSON.stringify(response.data));
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