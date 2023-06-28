import { createPinia, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const pinia = createPinia()

export const useAppStore = defineStore('app', () => {
  const menuClosed = ref(false)
  const toggleMenuClosed = () => menuClosed.value = !menuClosed.value
  const setMenuClosed = (value: boolean) => menuClosed.value = value

  return {
    menuClosed,
    toggleMenuClosed,
    setMenuClosed
  }
})

export const useUserStore = defineStore('user', {
  state: () => ({
    _id: localStorage.getItem('user_id'),
    email: localStorage.getItem('user_email')
  }),
  actions: {
    setUser(id: string, email: string) {
      localStorage.setItem('user_id', id)
      localStorage.setItem('user_email', email)
      this._id = id
      this.email = email
    },
    logout() {
      localStorage.clear()
    }
  }
}
)



const bgColor = '#fafbfe'
const theme = [
  {
    name: '默认',
    bgColor: '#7c85f6',
    textColor: '#c0c0c0',
    textSelectColor: '#fff',
  }, {
    name: '白色',
    bgColor: '#7c85f6',
    textColor: '#c0c0c0',
    textSelectColor: '#fff',
  }, {
    name: '黑色',
    bgColor: '#7c85f6',
    textColor: '#c0c0c0',
    textSelectColor: '#fff',
  },
]