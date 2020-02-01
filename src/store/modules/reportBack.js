import {
    reportBackList,
 } from '@/api/reportBack'
 
 
 const state = {}
 
 
 const mutations = {}
 
 const actions = {
    reportBackList({
     commit
   }, params) {
     return new Promise((resolve, reject) => {
        reportBackList(params).then(response => {
         const {
           data
         } = response
         resolve(data)
       }).catch(error => {
         reject(error)
       })
     })
   },
 
  
 
 
 }
 
 export default {
   namespaced: true,
   state,
   mutations,
   actions
 }
 