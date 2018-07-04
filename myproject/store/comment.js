import Request from '~/static/api/Requst.js'

export const state = () => ({
  list: [],
})

export const mutations = {
    SET_COMMENT_LIST: function (state, data) {
       state.list = data
    },
}

export const actions = {
  async getCommentList({ commit }, { page, size, filter}) {
    commit('SET_COMMENT_LIST', null)
    try {
      const { data } = await Request.comment.getCommenttList(page,size,filter)
      console.log(data); 
      if (data.code === 1) {
        commit('SET_COMMENT_LIST', data.data.data)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async addComment({ commit }, {params }) {
    try {
      const { data } = await Request.comment.addComment(params)
      console.log(data); 
      if (data.code === 1) {
         return 1
      }else{
         throw new Error(data.msg)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  

}