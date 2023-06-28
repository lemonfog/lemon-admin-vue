import { ref } from 'vue';

export const menuClosed = ref(false)

export const toggleMenuClosed = () => menuClosed.value = !menuClosed.value
export const setMenuClosed = (value: boolean) => menuClosed.value = value