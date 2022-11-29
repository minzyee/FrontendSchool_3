// fetch 하는 곳

import { createContext } from 'react'

async function callAPI(){
  const response = await fetch('https://test.api.weniv.co.ke./mall')

  const result = await response.json();
  return result;
}

export const callAPIResponse = createContext(callAPI());