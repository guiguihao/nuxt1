import Request from '~/static/api/Requst.js'

export const state = () => ({
  authUser: null,
  code: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_CODE: function (state, user) {
    state.code = user
  }
}

export const actions = {
  async login({ commit }, { username, password }) {
    // try {
    //   const { data } = await axios.post('/api/login', { username, password })
    //   commit('SET_USER', data)
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     throw new Error('Bad credentials')
    //   }
    //   throw error
    // }
    try {
      const { data } = await Request.user.userLogin({name:username,password:password})
      if (data.code === 1) {
        commit('SET_USER', data.data)
      }else{
        commit('SET_USER', null)
        throw new Error(data.msg)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }

  },

  async logout({ commit }) {
    try {
      const { data } = await Request.user.userLogOut()
      if (data.code === 1) {
        commit('SET_USER', null)
      }else{
         throw new Error(data.msg)
      }
    }catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
    
  },


  async zhuce({ commit }, { name, email,password }) {
    try {
      const { data } = await Request.user.addUser({name:name,email:email,password,password})
      if (data.code === 1) {
       return 1
      }else{
         throw new Error(data.msg)
      }
    }catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
    
  },

  async sendmial({ commit },{ email }) {
    try {
      const { data } = await Request.user.sendEmailCode(email)
      if (data.code === 1) {
        commit('SET_CODE', data.data.code)
        return 1
      }else{
         throw new Error(data.msg)
      }
    }catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
    
  }
  

}