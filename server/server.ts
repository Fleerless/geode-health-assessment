import { AxiosResponse } from "axios";
import { Request, Response } from "express";

const express = require('express');
const axios = require("axios");

const app = express();

const PORT = process.env.PORT ?? 5050;

const _baseURL = "https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/"
const _trendsURL = "https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/trends"

app.get("/complaints", (req: Request, res: Response) => {
    axios.get(_baseURL)
    .then((response: AxiosResponse) => {
        res.send(response.data.hits.hits)
    })
})

app.get("/trends", (req: Request, res: Response) => {
    axios.get(_trendsURL)
    .then((response: AxiosResponse) => {
        console.log(JSON.stringify(response.data));
        res.send(response.data);
    });
});

app.get("/complaint/:id", (req: Request, res: Response) => {
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`);})