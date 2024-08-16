import api from '@/lib/api/$api'
import aspida from '@aspida/axios'
import axios from 'axios'

const axiosConfig = {
  baseURL: process.env.API_URL,
}
export const apiClient = api(aspida(axios, axiosConfig))
