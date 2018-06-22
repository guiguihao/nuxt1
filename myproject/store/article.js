import Request from '~/static/api/Requst.js'

export const state = () => ({
  list: [],
  allCount:0,
  currentArticle:''
})

export const mutations = {
    SET_ARTICLE_LIST: function (state, data) {
       state.list = data
    },
    SET_ARTICLE_COUNT: function (state, data) {
       state.allCount = data
    }
}

export const actions = {
  async getArticleList({ commit }, { page, size, filter}) {
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
      const { data } = await Request.article.getArticleList(page,size,filter)
      console.log(data); 
      if (data.code === 1) {
        commit('SET_ARTICLE_LIST', data.data.data)
        commit('SET_ARTICLE_COUNT', data.data.count)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }

  },

  

}