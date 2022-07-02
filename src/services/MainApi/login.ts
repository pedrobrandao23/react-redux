import baseAPI from "./config";

interface LoginPayload {
    email:string;
    senha:string
}
export function login(payload:LoginPayload) {
    return baseAPI.post("/login", payload);
}