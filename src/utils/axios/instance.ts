import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {};

export const _instance = axios.create(options);
