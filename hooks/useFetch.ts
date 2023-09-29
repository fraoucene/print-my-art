/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useState } from 'react'

type FetchState = {
  error: boolean
  loading: boolean
  success: boolean
}

const defaultState = {
  error: false,
  loading: false,
  results: null,
  success: false,
}

const fetchStates = {
  error: { ...defaultState, error: true },
  loading: { ...defaultState, loading: true },
  success: { ...defaultState, success: true },
}

const ERROR_MESSAGE_GENERIC =
  "Une erreur s'est produite pendant le chargement de la page. Merci de réessayer."

const useFetch: <S>(
  call: (...callArgs: any) => any,
  deps: DependencyList,
  ...args: any
) => FetchState & { results: S | null } = (
  call: (...callArgs: any) => any,
  deps: DependencyList,
  ...args: any
) => {
  const [fetchState, updateState] = useState(fetchStates.loading)
  const doFetch = async () => {
    try {
      updateState(fetchStates.loading)
      const results = await call(...args)
      updateState({ ...fetchStates.success, results })
    } catch (e: any) {
      updateState({ ...fetchStates.success, loading: false })
      updateState({ ...fetchStates.success, results: null })
      updateState({ ...fetchStates.error })
      console.log(e?.message || ERROR_MESSAGE_GENERIC)
    }
  }

  useEffect(() => {
    doFetch()
  }, deps)

  return fetchState
}

export default useFetch
