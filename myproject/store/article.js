import Request from '~/static/api/Requst.js'

export const state = () => ({
  list: [],
  reList:[],
  moHuList:[],
  hostList:[],
  allCount:0,
  currentArticle:''
})

export const mutations = {
    SET_ARTICLE_LIST: function (state, data) {
       state.list = data
    },
    SET_MOHU_ARTICLE_LIST: function (state, data) {
       state.moHuList = data
    },
    SET_RE_ARTICLE_LIST: function (state, data) {
       state.reList = data
    },
    SET_HOST_LIST: function (state, data) {
       state.hostList = data
    },
    SET_ARTICLE_COUNT: function (state, data) {
       state.allCount = data
    }
}

export const actions = {
  //获取列表
  async getArticleList({ commit }, { page, size, filter}) {
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

  //模糊查询
  async getMoHuArticleList({ commit }, { page, size, filter}) {
    try {
      console.log(filter);
      const { data } = await Request.article.getArticleList(page,size,filter)
       
      if (data.code === 1) {
        commit('SET_MOHU_ARTICLE_LIST', data.data.data)
        commit('SET_ARTICLE_COUNT', data.data.count)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  //获取热门排行列表
  async getHotArticleList({ commit }, { page, size, filter}) {
    try {

      const { data } = await Request.article.getArticleList(page,size,filter)
      if (data.code === 1) {
        commit('SET_HOST_LIST', data.data.data)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
   
   //获取替换方案列表
   async getReArticleList({ commit }, { page, size, filter}) {
    commit('SET_RE_ARTICLE_LIST', null)
    try {
      const { data } = await Request.article.getArticleList(page,size,filter)
      console.log(data); 
      if (data.code === 1) {
        commit('SET_RE_ARTICLE_LIST', data.data.data)
      };
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  //添加
  async addArticle({ commit }, {params }) {
    try {
      const { data } = await Request.article.addArticle(params)
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
  //修改
  async updateArticle({ commit }, {params }) {
    try {
      const { data } = await Request.article.updateArticle(params)
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