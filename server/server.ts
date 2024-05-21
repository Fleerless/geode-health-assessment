import { AxiosResponse } from "axios";
import { Request, Response } from "express";

const express = require('express');
var axios = require("axios");

const app = express();

const PORT = process.env.PORT || 5050;

const _baseURL = "https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/"

app.get("/complaints", (req: Request, res: Response) => {
    axios.get(`${_baseURL}`)
    .then((response: AxiosResponse) => {
        res.send(response.data.hits.hits)
    })
})

app.get("/complaint/:id", (req: Request, res: Response) => {
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`);})