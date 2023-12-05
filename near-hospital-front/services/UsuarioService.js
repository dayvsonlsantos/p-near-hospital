import axios from "axios";
import config from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    baseURL: "http://192.168.1.15:3000",
    headers: {
        'Content-Type': 'application/json',
    },
});

class UsuarioService {
    async cadastrar(data) {
        console.log(data);
        try {
            const response = await fetch("http://192.168.1.15:3000/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (response.ok) {
                return Promise.resolve(responseData);
            } else {
                console.error("Error:", responseData);
                return Promise.reject(responseData);
            }
        } catch (error) {
            console.error("Error:", error);
            return Promise.reject(error);
        }
    }


    async login(data) {
        try {
            const response = await api.post("/auth/login", data);

            if (response.data.token) {
                // Login bem-sucedido
                return { success: true, token: response.data.token, user: response.data.user };
            } else {
                // Login mal-sucedido
                return { success: false, error: "Token não encontrado na resposta" };
            }
        } catch (error) {
            // Erro na solicitação
            return { success: false, error: error.message };
        }
    }



}

const usuarioService = new UsuarioService();
export default usuarioService;
