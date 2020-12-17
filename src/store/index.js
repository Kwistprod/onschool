import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      id: null,
      login: '',
      name: '',
      surname: '',
      phone: '',
    },
    courses: {}
  },
  mutations: {
    setCourses(state, courses){
      state.courses = courses;
    },
    setLogin(state,login){
      state.user.login = login;
    },
    setId(state, id){
      state.user.id = id;
    },
    setName(state, name){
      state.user.name = name;
    },
    setSurname(state, surname){
      state.user.surname = surname;
    },
    setPhone(state, phone){
      state.user.phone = phone;
    },
    // setMyCourses(state,myCourses){
    //   state.user.myCourses = myCourses;
    // },
    clearAll(state){
      console.log('a');
      state.user.login = '';
      state.user.id = null;
      state.user.name = '';
      state.user.surname = '';
      state.user.phone = '';
      // state.user.myCourses = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
