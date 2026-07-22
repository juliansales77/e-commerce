import { signal} from "@angular/core";

export const usuarioLogado = signal (false);

//! define Signal usuarioLogado como (true), permite acesso as rotas 
export function login(){
    usuarioLogado.set(true);
}
//! difine Signal usuarioLogado  com (false), bloqueia acesso imediato
export function logout(){
    usuarioLogado.set(false);
}