import useSWR from 'swr'

import { GetLinkInterface } from '../interfaces'
import { HttpLink } from '../../entities/entities'
//import parse from 'csv-parse';
import parseCSV from 'csv-parse/lib/sync'

class GetLink implements GetLinkInterface {
  private url: string

  constructor(url: string) {
    this.url = url
  }

  list(): HttpLink[] {
    const fetcher = async (url: string): Promise<HttpLink[] | null> => {
      const response = await fetch(url)
      const result: HttpLink[] = parseCSV(await response.text(), {
        columns: true,
      })
      return result
    }

    const { data } = useSWR(this.url, fetcher)

    if (data === undefined) {
      return null
    }

    return data
  }
}

export default GetLink
