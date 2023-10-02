import type { Articles } from '../utils/interfaces';

export const getArticlesData = async():Promise<Articles> => {
    const data = await fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws').then( res => res.json() );
    return data
  }