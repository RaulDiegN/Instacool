import { AnyAction, Dispatch } from 'redux'
import _firebase  from 'firebase'
import { IServices } from '../services'
import { storage } from '../services/firebase'

const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'

export interface IDataPosts{
  (key: string):{
    comment: string
    userId: string
    createAt: _firebase.firestore.Timestamp
    imageURL: string
  }
}
const fetchStart = () => ({
  type: START,
})

const fetchSuccess = (payload: IDataPosts) => ({
  payload,
  type: SUCCESS,
})

const fetchError = (error:Error) => ({
  error,
  type: ERROR,
})

const initialState = {
  data: {},
  fetched: false,
  fetching: false,
}

export default function reducer (state = initialState, action: AnyAction){
  switch(action.type){
    case START:
      return {
        ...state,
        fetching:true,
      }
    case SUCCESS:
      return{
        ...state,
        data: action.payload,
        fetched: true,
        fetching: false,
      }
    case Error:
      return{
        ...state,
        error: action.error,
        fetching: false,
      }
    default:
      return state
  }
  return state
}

export const fetchPosts = () => 
  async (dispatch: Dispatch, getState: () => any, { db }: IServices) => {
    dispatch(fetchStart())
    try{
      const snaps = await db.collection('posts').get()
      const posts = {}
      snaps.forEach( x => posts[x.id] = x.data())
      const imgIds = await Promise.all(Object.keys(posts)
        .map(async x => {
          const ref = storage.ref(`posts/${x}.jpg`)
          const url = await ref.getDownloadURL()
          return [x, url]
        }))
      const keyedImages = {}
      imgIds.forEach(x => keyedImages[x[0]] = x[1])
      Object.keys(posts).forEach(x => posts[x] = {
        ...posts[x],
        imageURL: keyedImages[x],
      })
      dispatch(fetchSuccess(posts))
    }catch(e){
      dispatch(fetchError(e))
    }
  }

  export const like = (id: string) => 
    async (dispatch: Dispatch, getState: () => any, {}: IServices) => {

    }
  export const share = (id: string) => 
    async (dispatch: Dispatch, getState: () => any, {}: IServices) => {
      
    }