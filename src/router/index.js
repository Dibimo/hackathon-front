import { createRouter, createWebHistory } from 'vue-router';

const criarRota = (caminho, nome) => {
    return {
        path: caminho,
        name: nome,
    }
}

const rotas = [
    {
        ...criarRota(),
        component: () => import(''),
    }
];

const router = createRouter({
    history: createWebHistory(),
    rotas
});



