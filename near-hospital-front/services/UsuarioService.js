import axios from "axios";
import config from "../config";

const api = axios.create({
    baseURL: "http://192.168.1.12:3000",
    headers: {
        'Content-Type': 'application/json',
    },
});

class UsuarioService {
    async cadastrar(data) {
        console.log(data);
        try {
            const response = await api.post("/users", data);
            return Promise.resolve(response);
        } catch (error) {
            console.error("Error:", error);
            return Promise.reject(error);
        }
    }
}

const usuarioService = new UsuarioService();
export default usuarioService;
